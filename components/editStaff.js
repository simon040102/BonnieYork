import React from 'react';
import Image from 'next/image';
import Pig from '../src/images/pig.jpg';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const editStaff = (props) => {
    const {setEditStaff}=props
  return (
    <>
      <div className="fixed  z-10 h-full  overflow-y-auto top-0 w-full flex justify-center bg-black/50">
        <div
          data-aos="zoom-in"
          className="relative w-96 h-fit mt-20 bg-white border border-black"
        >
          <Image src={Pig} />
          <div className="px-5 py-5">
            <button className="bg-gray-300 w-full h-8 mb-4">刪除員工</button>
            <div className="flex gap-2 mb-2">
              <p className="w-4/12 text-end">姓名：</p>
              <p className="text-center w-full">可愛粉紅豬</p>
            </div>
            <div className="flex gap-2 mb-2 ">
              <p className="w-4/12 text-end">信箱：</p>
              <p className="text-center w-full">xxx123@gmail.com</p>
            </div>

            <div className="flex gap-2 mb-2">
              <p className="w-4/12 text-end">職稱：</p>
              <input
                type="text"
                value={'設計師'}
                className="border indent-3 w-full text-center"
              />
            </div>
            <div className="flex gap-2 mb-16 ">
              <div className="w-4/12">
                <p>工作項目：</p>
              </div>
              <div className="flex flex-wrap gap-2 w-8/12">
                <div className="flex ">
                  <input
                    type="checkbox"
                    checked
                    name="男士剪髮"
                    className="text-xs"
                  />
                  <p className="">男士剪髮</p>
                </div>{' '}
                <div className="flex ">
                  <input
                    type="checkbox"
                    checked
                    name="男士剪髮"
                    className="text-xs"
                  />
                  <p className="">女士剪髮</p>
                </div>{' '}
                <div className="flex ">
                  <input
                    type="checkbox"
                    checked
                    name="男士剪髮"
                    className="text-xs"
                  />
                  <p className="">燙髮</p>
                </div>{' '}
                <div className="flex ">
                  <input type="checkbox" name="男士剪髮" className="text-xs" />
                  <p className="">染髮</p>
                </div>
                <div className="flex ">
                  <input
                    type="checkbox"
                    checked
                    name="男士剪髮"
                    className="text-xs"
                  />
                  <p className="">粉紅吹風機</p>
                </div>
              </div>
            </div>
            <div className='flex justify-center gap-3 '>
                <button className='bg-gray-200 w-32 h-10' onClick={()=>{setEditStaff(false)}}>放棄變更</button>
                <button className='bg-gray-400 text-white w-32 h-10'>確認修改</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default editStaff;
