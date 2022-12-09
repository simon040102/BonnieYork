/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import { useState, useEffect } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { useThem } from '../modules/context';
import Layout from '../modules/layout';

import EditStaff from '../components/editStaff';
import AddStaff from '../components/addStaff';

const staff = () => {
  const [editStaff, setEditStaff] = useState(false);
  const [addStaff, setAddStaff] = useState(false);
  const [allItem, setAllItem] = useState([]);
  const [allStaff, setAllStall] = useState([]);
  const { apiUrl, setLoading } = useThem();
  const [editInf, setEditInf] = useState({});

  const showStaff = () => {
    try {
      return allStaff.map((item, index) => (
        <li
          key={index}
          className="mb-6 flex h-52 w-full rounded-lg border-2 border-unSelect bg-white shadow-lg"
        >
          <img
            src={item?.HeadShot}
            alt=""
            className="w-2/5 rounded-l-lg object-cover"
          />

          <div className="relative w-3/5 p-4">
            <p className="mb-1 ">
              暱稱：
              <span className="font-bold text-secondary">{item.StaffName}</span>
            </p>
            <p className="mb-1">
              職稱：
              <span className="font-bold text-secondary">{item.JobTitle}</span>
            </p>
            <p className="mb-1">
              工作項目：
              {item.StaffWorkItems.map((job) => (
                <span className="font-bold text-secondary">
                  {` ${job.ItemName}  `}｜
                </span>
              ))}
            </p>
            <div className="absolute bottom-5 right-5">
              <button
                onClick={() => {
                  setEditStaff(true);
                  setEditInf(item);
                }}
              >
                <EditOutlinedIcon />
              </button>
            </div>
          </div>
        </li>
      ));
    } catch (error) {
      /* empty */
    }
  };

  console.log(allStaff);
  useEffect(() => {
    const Authorization = localStorage.getItem('BonnieYork');
    setLoading(true);
    const getItem = {
      method: 'get',
      url: `${apiUrl}/store/getallitems`,
      headers: {
        Authorization,
      },
    };
    const getStaff = {
      method: 'get',
      url: `${apiUrl}/store/allstaff`,
      headers: {
        Authorization,
      },
    };
    axios(getItem)
      .then((res) => {
        console.log(res);
        setAllItem(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    axios(getStaff)
      .then(async (res) => {
        const result = await res.data.AllStaffItem;
        console.log(res);
        setAllStall(result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <Layout title="員工管理">
      {editStaff && (
        <EditStaff
          setEditStaff={setEditStaff}
          editInf={editInf}
          allItem={allItem}
        />
      )}
      {addStaff && <AddStaff setAddStaff={setAddStaff} allItem={allItem} />}
      <h2 className="mb-10 mt-10 text-center text-4xl">員工資訊</h2>
      <div className="container mx-auto flex justify-center ">
        <ul className="w-full px-2 sm:w-3/4 md:px-0 lg:w-1/2">{showStaff()}</ul>
      </div>
      <div className="flex justify-center">
        <button onClick={() => setAddStaff(true)}>
          <AddCircleOutlineIcon sx={{ color: '#00659F', fontSize: 40 }} />
        </button>
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default staff;
