import React, { useState } from 'react'
import Layout from '../modules/layout'
import Head from 'next/head'
import Image from 'next/image';
import Pig from '../src/images/pig.jpg';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EditStaff from '../components/editStaff';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddStaff from '../components/addStaff';
const staff = () => {
    const [editStaff,setEditStaff]=useState(false)
    const [addStaff,setAddStaff]=useState(true)
  return (
    <div className="pt-10">
      <Head>
        <title>員工管理</title>
      </Head>

      <Layout>
        {editStaff && <EditStaff setEditStaff={setEditStaff} />}
        {addStaff && <AddStaff setAddStaff={setAddStaff} />}
        <h2 className="text-4xl text-center mb-10">員工資訊</h2>
        <div className="container mx-auto flex justify-center ">
          <ul className="w-full px-2 md:px-0 sm:w-3/4 lg:w-1/2">
            <li className="w-ful h-52 border border-black flex mb-6">
              <Image src={Pig} className="w-2/5 object-cover" />
              <div className="p-4 relative">
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
            <li className="w-ful h-52 border border-black flex mb-6">
              <Image src={Pig} className="w-2/5 object-cover" />
              <div className="p-4 relative">
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
      </Layout>
    </div>
  );
}

export default staff