/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import { useState, useEffect } from 'react';
import Image from 'next/image';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { useThem } from '../modules/context';
import Layout from '../modules/layout';

import Pig from '../src/images/pig.jpg';
import EditStaff from '../components/editStaff';
import AddStaff from '../components/addStaff';

const staff = () => {
  const [editStaff, setEditStaff] = useState(false);
  const [addStaff, setAddStaff] = useState(true);
  const [allItem, setAllItem] = useState([]);
  const { apiUrl, setLoading } = useThem();

  console.log(allItem);
  useEffect(() => {
    const Authorization = localStorage.getItem('BonnieYork');
    setLoading(true);
    const config = {
      method: 'get',
      url: `${apiUrl}/store/getallitems`,
      headers: {
        Authorization,
      },
    };
    axios(config)
      .then((res) => {
        console.log(res);
        setAllItem(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div className="pt-10">
      <Layout title="員工管理">
        {editStaff && <EditStaff setEditStaff={setEditStaff} />}
        {addStaff && <AddStaff setAddStaff={setAddStaff} allItem={allItem} />}
        <h2 className="mb-10 text-center text-4xl">員工資訊</h2>
        <div className="container mx-auto flex justify-center ">
          <ul className="w-full px-2 sm:w-3/4 md:px-0 lg:w-1/2">
            <li className="w-ful mb-6 flex h-52 border border-black">
              <Image src={Pig} className="w-2/5 object-cover" />
              <div className="relative p-4">
                <p className="mb-1">暱稱：可愛粉紅豬</p>
                <p className="mb-1">職稱：設計師</p>
                <p className="mb-1">
                  工作項目：男士剪髮、女士剪髮、燙髮、染髮、粉紅吹風機
                </p>
                <div className="mt-10 flex justify-end">
                  <button
                    onClick={() => {
                      setEditStaff(true);
                    }}
                  >
                    <EditOutlinedIcon />
                  </button>
                </div>
              </div>
            </li>
            <li className="w-ful mb-6 flex h-52 border border-black">
              <Image src={Pig} className="w-2/5 object-cover" />
              <div className="relative p-4">
                <p className="mb-1">暱稱：可愛粉紅豬</p>
                <p className="mb-1">職稱：設計師</p>
                <p className="mb-1">
                  工作項目：男士剪髮、女士剪髮、燙髮、染髮、粉紅吹風機
                </p>
                <div className="mt-10 flex justify-end">
                  <button>
                    <EditOutlinedIcon />
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <button onClick={() => setAddStaff(true)}>
            <AddCircleOutlineIcon sx={{ fontSize: 40 }} />
          </button>
        </div>
        <ToastContainer />
      </Layout>
    </div>
  );
};

export default staff;
