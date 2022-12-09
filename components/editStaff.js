/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */

import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useThem } from '../modules/context';
import 'react-toastify/dist/ReactToastify.css';

const editStaff = ({ setEditStaff, editInf, allItem }) => {
  const Authorization = localStorage.getItem('BonnieYork');
  const [jobs, setJobs] = useState([]);
  const [changeData, SetDataChange] = useState(false);
  const [inf, setInf] = useState({
    JobTitle: editInf.JobTitle,
    StaffId: editInf.Id,
  });
  const [remove, setRemove] = useState(false);
  const { apiUrl, setLoading } = useThem();
  const router = useRouter();

  console.log(inf);
  const showAllItem = () => {
    try {
      return allItem.map((item) => {
        const handleClick = (e) => {
          SetDataChange(true);
          const { value, checked } = e.target;
          console.log(value, checked);
          if (checked) {
            setJobs([...jobs, value]);
          } else if (!checked) {
            setJobs(jobs.filter((num) => num !== value));
          }
        };
        useEffect(() => {
          setInf((prevState) => ({
            ...prevState,
            BusinessItemsId: jobs.toString(),
          }));
        }, [jobs]);
        return (
          <div className="flex ">
            <input
              type="checkbox"
              checked={jobs.indexOf(item.ItemId.toString()) >= 0}
              value={item.ItemId}
              className="text-xs"
              onClick={handleClick}
            />
            <p className="ml-2 text-input">{item.ItemName}</p>
          </div>
        );
      });
    } catch (error) {
      /* empty */
    }
  };

  const handleChange = (e) => {
    SetDataChange(true);
    const { name, value } = e.target;
    setInf((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(inf);
    const config = {
      method: 'post',
      url: `${apiUrl}/store/editstaff`,
      headers: {
        Authorization,
      },
      data: inf,
    };
    if (changeData) {
      setLoading(true);
      axios(config)
        .then((res) => {
          console.log(res);
          setLoading(false);
          toast.success('修改成功', {
            position: 'top-center',
            autoClose: 1000,
          });
          setTimeout(() => {
            router.reload(window.location.pathname);
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.Message, {
            position: 'top-center',
            autoClose: 1000,
          });
          setLoading(false);
        });
    }
  };

  const handleDelete = () => {
    setLoading(true);
    const config = {
      method: 'delete',
      url: `${apiUrl}/store/deletestaff?staffId=${editInf.Id}`,
      headers: {
        Authorization,
      },
      data: inf,
    };
    axios(config)
      .then((res) => {
        console.log(res);
        setLoading(false);
        toast.success('刪除成功', {
          position: 'top-center',
          autoClose: 1000,
        });
        setTimeout(() => {
          router.reload(window.location.pathname);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.Message, {
          position: 'top-center',
          autoClose: 1000,
        });
        setLoading(false);
      });
  };

  useEffect(() => {
    editInf.StaffWorkItems.forEach((item) => {
      setJobs((prevState) => [...prevState, item.BusinessItemsId.toString()]);
    });
  }, []);
  return (
    <div className="fixed  top-4 z-10  flex h-full w-full justify-center overflow-y-auto bg-black/50">
      <div
        data-aos="zoom-in"
        className="relative mt-20 h-fit  w-96 rounded-lg  bg-white  pb-4"
      >
        <div className="flex gap-4 px-5 pt-8">
          <img
            src={editInf.HeadShot}
            alt=""
            className=" aspect-square h-32 rounded-lg object-cover"
          />
          <div className="my-auto">
            <h2 className=" text-xl font-bold">{editInf.StaffName}</h2>
            <p className="text-xs">{editInf.Account}</p>
          </div>
        </div>

        <div className="px-5 py-5">
          <div className="relative">
            <p className="absolute -top-2.5 left-4 bg-white px-2 text-input">
              職稱
            </p>
            <input
              name="JobTitle"
              value={inf.JobTitle}
              onChange={handleChange}
              type="text"
              className="mb-6 mr-2 h-10 w-full rounded-lg border border-input text-center"
            />
          </div>
          <div className="mx-auto mb-16 ">
            <div className="mb-2 w-full ">
              <p className="text-input">工作項目</p>
            </div>
            <div className="flex w-full flex-wrap gap-2">{showAllItem()}</div>
          </div>
          <div className="flex justify-center gap-3 ">
            <button
              className="h-12 w-32 rounded-lg bg-footerL text-secondary"
              onClick={() => setEditStaff(false)}
            >
              放棄變更
            </button>
            {remove ? (
              <button
                className="h-12 w-32 rounded-lg bg-red text-white"
                onClick={handleDelete}
              >
                確認刪除
              </button>
            ) : (
              <button
                className="h-12 w-32 rounded-lg bg-secondary text-white"
                onClick={handleSubmit}
              >
                確認修改
              </button>
            )}
          </div>
          <div className="flex justify-center">
            <button
              className="mb-4 mt-4 h-8 w-64 rounded-lg text-secondary"
              onClick={() => {
                setRemove(!remove);
              }}
            >
              {remove ? '取消刪除' : '刪除員工'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default editStaff;
