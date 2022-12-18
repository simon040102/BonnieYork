/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import format from 'date-fns/format';
import { useRouter } from 'next/router';
import { useThem } from '../modules/context';

const addReserve = ({ setAddReserve }) => {
  const [startDate, setStartDate] = useState(new Date());
  const { apiUrl, setLoading } = useThem();
  const [item, setItem] = useState([]);
  const [staff, setStaff] = useState([]);
  const [reserveDate, setReserveDate] = useState({});
  const [enableDay, setEnableDay] = useState([]);
  const [time, setTime] = useState([]);
  const [title, setTitle] = useState('');
  const router = useRouter();
  const [reserve, setReserve] = useState({
    StaffId: '',
    ItemId: '',
    ReserveDate: '',
    ReserveStart: '',
    ManualName: '',
    ManualCellphoneNumber: '',
    ManualEmail: '',
  });

  const selectDateHandle = (date) => {
    setStartDate(date);
    const choseDay = format(new Date(date), 'yyyy/MM/dd');
    setReserve((prevState) => ({
      ...prevState,
      ReserveDate: choseDay,
    }));
    setTime(reserveDate[choseDay]?.split(','));
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setReserve((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showItem = () =>
    item?.map((items) => (
      <option value={items.ItemId}>{items.ItemName}</option>
    ));

  const selectItem = (e) => {
    setLoading(true);
    const { value } = e.target;
    setReserve((prev) => ({
      ...prev,
      ItemId: value,
    }));
    const Authorization = localStorage.getItem('BonnieYork');
    const config = {
      method: 'get',
      url: `${apiUrl}/store/projectemployees?itemId=${value}`,
      headers: {
        Authorization,
      },
    };
    axios(config)
      .then((res) => {
        setLoading(false);
        setStaff(res.data);
      })
      .catch(() => {});
  };

  const showStaff = () =>
    staff?.map((staffs) => (
      <option value={staffs.StaffId}>{staffs.StaffName}</option>
    ));

  const selectStaff = (e) => {
    const { value, name } = e.target;
    setReserve((prev) => ({
      ...prev,
      [name]: value,
    }));
    const Authorization = localStorage.getItem('BonnieYork');
    const config = {
      method: 'get',
      url: `${apiUrl}/store/ManuallyAddReserve?itemId=${reserve.ItemId}&staffId=${value}`,
      headers: {
        Authorization,
      },
    };
    axios(config)
      .then(async (res) => {
        setLoading(false);
        const { TheEnableDate, TheReserveDate } = await res.data;

        setStartDate(new Date(Object.keys(TheReserveDate)[0]));
        setTime(Object.values(TheReserveDate)[0].split(','));
        setReserveDate(TheReserveDate);
        TheEnableDate.forEach((date) => {
          setEnableDay((prevDay) => [...prevDay, new Date(date)]);
        });
        setReserve((prevState) => ({
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

  const showTime = () =>
    time?.map((times, index) => (
      <option key={index} value={times}>
        {times}
      </option>
    ));

  const handleSubmit = () => {
    setLoading(true);
    const Authorization = localStorage.getItem('BonnieYork');
    const config = {
      method: 'post',
      url: `${apiUrl}/store/confirmmanuallyreserve`,
      headers: {
        Authorization,
      },
      data: reserve,
    };
    axios(config)
      .then(async () => {
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
    setLoading(true);
    const Authorization = localStorage.getItem('BonnieYork');
    const config = {
      method: 'get',
      url: `${apiUrl}/store/getallitems`,
      headers: {
        Authorization,
      },
    };
    axios(config)
      .then((res) => {
        setItem(res.data.allItems);
        setTitle(res.data.staffTitle[0]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="fixed  top-10 z-10  flex h-full w-full justify-center overflow-y-auto bg-black/50">
      <div
        data-aos="zoom-in"
        className="relative mt-20 h-fit w-96  items-center rounded-lg bg-white py-8"
      >
        <div className="px-8">
          <div className="relative">
            <p className="absolute -top-2.5 left-4  bg-white px-2 text-input">
              預約項目
            </p>
            <select
              name="ItemName"
              id=""
              className="mb-6 h-10 w-full rounded-lg border border-unSelect text-center indent-3 "
              onChange={selectItem}
            >
              <option value="">請選擇項目</option>
              {showItem()}
            </select>
          </div>
          <div className="relative">
            <p className="absolute -top-2.5 left-4  bg-white px-2 text-input">
              顧客
            </p>
            <input
              name="ManualName"
              id=""
              value={reserve.ManualName}
              className="mb-6 h-10 w-full rounded-lg border border-unSelect text-center indent-3 "
              onChange={handleChange}
            />
          </div>
          <div className="relative">
            <p className="absolute -top-2.5 left-4  bg-white px-2 text-input">
              {title}
            </p>
            <select
              name="StaffId"
              id=""
              className="mb-6 h-10 w-full rounded-lg border border-unSelect text-center indent-3 "
              onChange={selectStaff}
            >
              <option value="">請選擇{title}</option>
              {showStaff()}
            </select>
          </div>
          <div className="relative">
            <p className="absolute -top-2.5 left-4  bg-white px-2 text-input">
              手機號碼：
            </p>
            <input
              type="phone"
              name="ManualCellphoneNumber"
              value={reserve.ManualCellphoneNumber}
              className="mb-6 h-10 w-full rounded-lg border border-unSelect text-center indent-3 "
              onChange={handleChange}
            />
          </div>
          <div className="relative">
            <p className="absolute -top-2.5 left-4  bg-white px-2 text-input">
              Email
            </p>
            <input
              type="mail"
              name="ManualEmail"
              value={reserve.ManualEmail}
              className="mb-6 h-10 w-full rounded-lg border border-unSelect text-center indent-3 "
              onChange={handleChange}
            />
          </div>

          <div className="relative w-full">
            <div className=" text-end">
              <p className="absolute -top-2.5 left-4 z-10  bg-white px-2 text-input">
                預約時間：
              </p>
            </div>

            <div className=" w-full">
              <div className="flex gap-2">
                <DatePicker
                  selected={startDate}
                  onChange={selectDateHandle}
                  showMonthDropdown
                  useShortMonthInDropdown
                  excludeDates={enableDay}
                  minDate={new Date()}
                  dateFormat="yyyy/MM/dd"
                  className="mb-6 h-10 w-full rounded-lg border border-unSelect text-center indent-3 "
                />
                <select
                  name="ReserveStart"
                  id=""
                  className="mb-6 h-10 w-full rounded-lg border border-unSelect text-center indent-3 "
                  onChange={handleChange}
                >
                  <option value="">請選擇時間</option>
                  {showTime()}
                </select>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <button
              className="h-10 w-32 rounded-lg bg-footerL text-center"
              onClick={() => setAddReserve(false)}
            >
              取消新增
            </button>
            <button
              className="text h-10 w-32 rounded-lg bg-secondary text-center text-white"
              onClick={handleSubmit}
            >
              確認新增
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default addReserve;
