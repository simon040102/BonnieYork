/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'aos/dist/aos.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import addDays from 'date-fns/addDays';
import format from 'date-fns/format';
import { useThem } from '../modules/context';

// eslint-disable-next-line react/function-component-definition
const MemberReserve = ({ setReserveInf, SetReserve, reserveInf, describe }) => {
  const [startDate, setDate] = useState(new Date());
  const { apiUrl, setLoading } = useThem();
  const [reserveData, SetReserveData] = useState({});
  const [reserveDate, setReserveDate] = useState({});
  const [enableDay, setEnableDay] = useState([]);
  const [time, setTime] = useState([]);
  const router = useRouter();

  console.log(reserveData);

  const showStaff = () => {
    if (reserveData.TheStaffName) {
      return reserveData?.TheStaffName.map((item, index) => (
        <option
          key={index}
          data-name={item.StaffName}
          value={[item.StaffId, item.StaffName]}
        >
          {item.StaffName}
        </option>
      ));
    }
  };

  const selectStaff = (e) => {
    setLoading(true);
    const Authorization = localStorage.getItem('BonnieYork');
    const { value } = e.target;
    setReserveInf((prevState) => ({
      ...prevState,
      StaffId: Number(value.split(',')[0]),
      StaffName: value.split(',')[1],
    }));
    const config = {
      method: 'get',
      url: `${apiUrl}/customer/SelectReserveTime?storeId=${
        reserveInf.StoreId
      }&itemId=${reserveInf.ItemId}&staffId=${value.split(',')[0]}`,
      headers: {
        Authorization,
      },
    };
    axios(config)
      .then(async (res) => {
        setLoading(false);
        const { TheEnableDate, TheReserveDate } = await res.data;
        setDate(new Date(Object.keys(TheReserveDate)[0]));
        setTime(Object.values(TheReserveDate)[0].split(','));
        setReserveDate(TheReserveDate);
        TheEnableDate.forEach((item) => {
          setEnableDay((prevDay) => [...prevDay, new Date(item)]);
        });
        setReserveInf((prevState) => ({
          ...prevState,
          ReserveDate: format(
            new Date(Object.keys(TheReserveDate)[0]),
            'yyyy/MM/dd'
          ),
        }));
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const selectDateHandle = (date) => {
    setDate(date);
    const choseDay = format(new Date(date), 'yyyy/MM/dd');
    setReserveInf((prevState) => ({
      ...prevState,
      ReserveDate: choseDay,
    }));
    setTime(reserveDate[choseDay]?.split(','));
  };

  const showTime = () =>
    time?.map((item, index) => (
      <option key={index} value={item}>
        {item}
      </option>
    ));

  const handleSelectTime = (e) => {
    const { value } = e.target;
    setReserveInf((prevState) => ({
      ...prevState,
      ReserveStart: value,
    }));
  };

  const handleSubmit = () => {
    setLoading(true);
    const Authorization = localStorage.getItem('BonnieYork');
    const config = {
      method: 'post',
      url: `${apiUrl}/customer/confirmreserve`,
      headers: {
        Authorization,
      },
      data: reserveInf,
    };
    axios(config)
      .then(() => {
        setLoading(false);
        toast.success('預約完成', {
          position: 'top-center',
          autoClose: 1000,
        });
        setTimeout(() => {
          router.reload(window.location.pathname);
        }, 1200);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const Authorization = localStorage.getItem('BonnieYork');
    setLoading(true);
    const config = {
      method: 'get',
      url: `${apiUrl}/customer/reserve?storeId=${reserveInf.StoreId}&itemId=${reserveInf.ItemId}`,
      headers: {
        Authorization,
      },
    };
    axios(config)
      .then((res) => {
        SetReserveData(res.data[0]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="fixed  top-10 z-10 flex h-full w-full justify-center overflow-y-auto bg-black/50 pb-16">
      <div
        data-aos="zoom-in"
        className="relative mt-20 h-fit w-96  rounded-lg  bg-white"
      >
        <div className="p-5">
          <div className="mb-4 flex gap-5">
            <img
              src={reserveData?.PicturePath}
              alt=""
              className="h-24 w-36 rounded-lg object-cover"
            />
            <div>
              <h2 className="mb-2  text-xl font-bold">
                {reserveData?.ItemName}
              </h2>
              <div className="mb-6 flex justify-center gap-2">
                <div className="flex gap-1 text-sm">
                  <AccessTimeOutlinedIcon
                    sx={{ fontSize: 20, color: '#00659F' }}
                  />
                  <p className="text-secondary">{reserveData?.SpendTime}</p>
                </div>
                <div className="flex gap-1 text-sm">
                  <MonetizationOnOutlinedIcon
                    sx={{ fontSize: 20, color: '#00659F' }}
                  />
                  <p className="text-secondary">{reserveData?.Price}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-4 rounded-md border-2 border-unSelect p-2">
              {describe}
            </p>
          </div>

          <div className="mb-2">
            <p className="mb-1">預約姓名：{reserveData?.CustomerName}</p>
          </div>
          <div className="mb-8 ">
            <p className="mb-1">
              手機號碼：{' '}
              {reserveData.CustomerCellPhoneNum &&
                reserveData.CustomerCellPhoneNum[0]}
            </p>
          </div>
          <div className="relative">
            <p className="absolute -top-2.5 left-4  bg-white px-2 text-input">
              {reserveData.StaffTitle && reserveData.StaffTitle[0]}
            </p>
            <select
              className="mb-6 h-10 w-full rounded-lg border border-unSelect text-center indent-3 "
              name="staff"
              id=""
              onChange={selectStaff}
            >
              <option value="">
                請選擇{reserveData.StaffTitle && reserveData.StaffTitle[0]}
              </option>
              {showStaff()}
            </select>
          </div>
          <div className="relative">
            <p className="absolute -top-2.5 left-4 z-10 bg-white px-2 text-input">
              日期
            </p>

            <DatePicker
              className="mb-6 h-10 w-full rounded-lg border border-unSelect text-center indent-3 "
              dateFormat="yyyy/MM/dd"
              selected={startDate}
              onChange={selectDateHandle}
              minDate={new Date()}
              excludeDates={enableDay}
              maxDate={addDays(new Date(), 30)}
              todayButton="Today"
            />
          </div>
          <div className="relative">
            <p className="absolute -top-2.5 left-4  bg-white px-2 text-input">
              時間
            </p>
            <select
              className="mb-6 h-10 w-full rounded-lg border border-unSelect text-center indent-3 "
              name="staff"
              id=""
              onChange={handleSelectTime}
            >
              <option value="不指定">選擇時間</option>
              {showTime()}
            </select>
          </div>
          <div className="relative">
            <p className="absolute -top-2.5 left-4  bg-white px-2 text-input">
              備註：
            </p>
            <textarea
              className="mb-6  w-full resize-none rounded-lg border border-unSelect text-center indent-3 "
              rows={3}
            />
          </div>
          <div className="flex justify-around">
            <button
              className="h-10 w-32 rounded-lg bg-footerL"
              onClick={() => SetReserve(false)}
            >
              取消
            </button>
            <button
              className="h-10 w-32 rounded-lg bg-secondary text-white"
              onClick={handleSubmit}
            >
              確認預約
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberReserve;
