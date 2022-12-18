/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-duplicates
import { useState, useEffect } from 'react';
import { format, addMonths } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useThem } from '../modules/context';

const addOffDay = ({ setAddOffDay }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [HolidayDate, setHolidayDate] = useState([]);
  const [allHoliday, SetAllHoliday] = useState([]);
  const { apiUrl, setLoading, data } = useThem();
  const router = useRouter();

  const handleClick = () => {
    const date = format(new Date(startDate), 'yyyy/MM/dd');
    if (HolidayDate.indexOf(date) >= 0) {
      /* empty */
    } else {
      setHolidayDate([...HolidayDate, date]);
      SetAllHoliday([...allHoliday, date]);
    }
  };
  const showDate = () =>
    HolidayDate.map((item, index) => {
      const handleDelete = () => {
        setHolidayDate(HolidayDate.filter((num) => num !== item));
        SetAllHoliday(HolidayDate.filter((num) => num !== item));
      };
      return (
        <li
          key={index}
          className="mb-2 flex items-center justify-between gap-3 border-b"
        >
          <p>{item}</p>
          <button onClick={handleDelete}>
            <DeleteOutlineIcon sx={{ fontSize: 20 }} />
          </button>
        </li>
      );
    });

  const handleSubmit = async () => {
    setLoading(true);
    const Authorization = localStorage.getItem('BonnieYork');
    const date = allHoliday.toString();
    const config = {
      method: 'post',
      url: `${apiUrl}/${
        data.status === 'store'
          ? 'store/EditHolidayDate'
          : 'staff/EditStaffDaysOff'
      }`,
      headers: {
        Authorization,
      },
      data: {
        [data.status === 'store' ? 'HolidayDate' : 'StaffDaysOff']: date,
      },
    };
    axios(config)
      .then((res) => {
        setLoading(false);
        toast.success('修改成功', {
          position: 'top-center',
          autoClose: 1000,
        });
        // setTimeout(() => {
        //   router.reload(window.location.pathname);
        // }, 1500);
      })
      .catch((err) => {
        toast.error(err.response.data.Message, {
          position: 'top-center',
          autoClose: 1000,
        });
        setLoading(false);
      });
  };

  useEffect(() => {
    const Authorization = localStorage.getItem('BonnieYork');
    setLoading(true);
    const { status } = data;
    const config = {
      method: 'get',
      url: `${apiUrl}/${
        status === 'store' ? 'store/GetHolidayDate' : 'staff/GetStaffDaysOff'
      }`,
      headers: {
        Authorization,
      },
    };
    axios(config)
      .then(async (res) => {
        if (data.status === 'store') {
          const date = await res.data.ShowHolidayDate.split(',');
          const allDate = await res.data.PastHolidayDate.split(',');
          SetAllHoliday(allDate.concat(date));
          setHolidayDate(date);
          setLoading(false);
        } else {
          const date = await res.data.ShowStaffDaysOff.split(',');
          const allDate = await res.data.PastStaffDaysOff.split(',');
          SetAllHoliday(allDate.concat(date));
          setHolidayDate(date);
          setLoading(false);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="fixed  top-10 z-10  flex h-full w-full justify-center overflow-y-auto bg-black/50">
      <div
        data-aos="zoom-in"
        className="relative mt-20 h-fit w-72 items-center  rounded-lg border bg-white py-8"
      >
        <div className="my-auto mb-4 flex justify-center gap-3">
          <div className="relative">
            <h2 className="absolute -top-2.5 left-4 z-10 bg-white px-2 text-input">
              請選擇日期
            </h2>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showMonthDropdown
              useShortMonthInDropdown
              maxDate={addMonths(new Date(), 2)}
              dateFormat="yyyy/MM/dd"
              className="my-auto  mr-2 h-14 w-full rounded-lg border border-input indent-9  "
            />
            <button onClick={handleClick} className="absolute right-2 top-3.5">
              <AddCircleOutlineIcon sx={{ color: '#00659F' }} />
            </button>
          </div>
        </div>
        <ul className="m-auto mb-5 w-32">{showDate()}</ul>
        <div className="flex justify-center gap-3 ">
          <button
            className="h-8 w-24 rounded-lg  bg-footerL text-black"
            onClick={() => setAddOffDay(false)}
          >
            取消
          </button>
          <button
            className="h-8 w-24 rounded-lg  bg-secondary text-white"
            onClick={handleSubmit}
          >
            確認
          </button>
        </div>
      </div>
    </div>
  );
};

export default addOffDay;
