/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import CloseIcon from '@mui/icons-material/Close';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/router';

import { useThem } from '../modules/context';

const editOder = ({ setEditOder, orderID }) => {
  const [edit, setEdit] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [order, setOrder] = useState({});
  const [remove, setRemove] = useState(false);
  const { apiUrl, setLoading } = useThem();
  const router = useRouter();

  const handleDelete = () => {
    const Authorization = localStorage.getItem('BonnieYork');
    setLoading(true);
    const config = {
      method: 'delete',
      url: `${apiUrl}/store/DeleteReserve?reserveId=${orderID} `,
      headers: {
        Authorization,
      },
    };
    axios(config)
      .then((res) => {
        console.log(res);
        toast.success('刪除成功', {
          position: 'top-center',
          autoClose: 1000,
        });
        setTimeout(() => {
          router.reload(window.location.pathname);
        }, 1500);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    const Authorization = localStorage.getItem('BonnieYork');
    setLoading(true);
    const config = {
      method: 'get',
      url: `${apiUrl}/store/getreserve?reserveId=${orderID} `,
      headers: {
        Authorization,
      },
    };
    axios(config)
      .then((res) => {
        console.log(res);
        const data = res.data[0];
        setOrder(data);
        setStartDate(new Date(data.ReserveDate));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  console.log(order);
  return (
    <div className="fixed  top-20 z-10  flex h-full w-full justify-center overflow-y-auto bg-black/50">
      <div
        data-aos="zoom-in"
        className="relative mt-20 h-fit w-96  items-center rounded-lg bg-white py-12 px-8 "
      >
        <button
          className="absolute right-4 top-4"
          onClick={() => setEditOder(false)}
        >
          <CloseIcon />
        </button>
        <div className="">
          {edit && (
            <button className="mt-4 mb-4 h-8  w-full rounded-lg  bg-footerL">
              完成訂單
            </button>
          )}
          {!edit && (
            <div>
              {remove ? (
                <button
                  className=" mb-4 h-8 w-full rounded-lg bg-red  text-white"
                  onClick={() => {
                    setRemove(!remove);
                  }}
                >
                  取消刪除
                </button>
              ) : (
                <button
                  className=" mb-4 h-8 w-full rounded-lg bg-red  text-white"
                  onClick={() => {
                    setRemove(!remove);
                  }}
                >
                  刪除訂單
                </button>
              )}
            </div>
          )}
        </div>
        <div>
          <div className="relative">
            <p className="absolute -top-2.5 left-4 z-10 bg-white px-2 text-input">
              設計師
            </p>
            <select
              name="StaffName"
              value={order.StaffName}
              id=""
              className="mb-6 h-10 w-full rounded-lg border border-unSelect text-center indent-3 "
              disabled={edit}
            >
              <option value="不指定">可愛粉紅豬</option>
            </select>
          </div>
          <div className="relative">
            <p className="absolute -top-2.5 left-4 z-10 bg-white px-2 text-input">
              顧客
            </p>
            <input
              type="text"
              name="CustomerName"
              className="mb-6 h-10 w-full rounded-lg border border-unSelect text-center indent-3 "
              value={order.CustomerName}
              disabled
            />
          </div>
          <div className="relative">
            <p className="absolute -top-2.5 left-4 z-10 bg-white px-2 text-input">
              預約項目
            </p>
            <select
              name="ItemName"
              id=""
              value={order.ItemName}
              className="mb-6 h-10 w-full rounded-lg border border-unSelect text-center indent-3 "
              disabled={edit}
            >
              <option value="不指定">染髮 2小時</option>
              <option value="女士剪髮">女士剪髮</option>
            </select>
          </div>
          <div className="relative">
            <p className="absolute -top-2.5 left-4 z-10 bg-white px-2 text-input">
              金額
            </p>
            <input
              type="text"
              className="mb-6 h-10 w-full rounded-lg border border-unSelect text-center indent-3 "
              name="Price"
              value={order.Price}
              disabled={edit}
            />
          </div>
          <div className="relative">
            <p className="absolute -top-2.5 left-4 z-10 bg-white px-2 text-input">
              手機號碼：
            </p>
            <input
              type="CellphoneNumber"
              className="mb-6 h-10 w-full rounded-lg border border-unSelect text-center indent-3 "
              value={order.CellphoneNumber}
              disabled
            />
          </div>
          <div className="relative">
            <p className="absolute -top-2.5 left-4 z-10 bg-white px-2 text-input">
              Email
            </p>
            <input
              type="Email"
              className="mb-6 h-10 w-full rounded-lg border border-unSelect text-center indent-3 "
              value={order.Email}
              disabled
            />
          </div>
          <div className="relative w-full">
            <div className=" text-end">
              <p className="absolute -top-2.5 left-4 z-10 bg-white px-2 text-input">
                預約時間：
              </p>
            </div>

            <div className=" w-full">
              <div className="flex gap-2">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showMonthDropdown
                  useShortMonthInDropdown
                  dateFormat="yyyy/MM/dd"
                  className="mb-6 h-10 w-full rounded-lg border border-unSelect text-center indent-3 "
                  disabled={edit}
                />
                <select
                  name=""
                  id=""
                  className="mb-6 h-10 w-full rounded-lg border border-unSelect text-center indent-3 "
                  disabled={edit}
                >
                  <option value="10:00">10:00</option>
                </select>
              </div>
            </div>
          </div>

          {edit && (
            <div className="flex justify-center gap-3">
              <button
                className="h-8 w-full rounded-lg bg-secondary text-white "
                onClick={() => setEdit(!edit)}
              >
                編輯預約
              </button>
            </div>
          )}
          {!edit && (
            <div className="mb-4 flex justify-between gap-3">
              <button
                className="h-8 w-32 rounded-lg bg-footerL"
                onClick={() => setEdit(!edit)}
              >
                捨棄變更
              </button>
              {remove ? (
                <button
                  className="h-8 w-32 rounded-lg bg-red text-white"
                  onClick={handleDelete}
                >
                  確認刪除
                </button>
              ) : (
                <button className="h-8 w-32 rounded-lg bg-secondary text-white">
                  確認變更
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default editOder;
