/* eslint-disable react/button-has-type */
import Image from 'next/image';
import Pig from '../src/images/pig.jpg';

const editStaff = ({ setEditStaff }) => (
  <div className="fixed  top-0 z-10  flex h-full w-full justify-center overflow-y-auto bg-black/50">
    <div
      data-aos="zoom-in"
      className="relative mt-20 h-fit w-96 border border-black bg-white"
    >
      <Image src={Pig} />
      <div className="px-5 py-5">
        <button className="bg-gray-300 mb-4 h-8 w-full">刪除員工</button>
        <div className="mb-2 flex gap-2">
          <p className="w-4/12 text-end">姓名：</p>
          <p className="w-full text-center">可愛粉紅豬</p>
        </div>
        <div className="mb-2 flex gap-2 ">
          <p className="w-4/12 text-end">信箱：</p>
          <p className="w-full text-center">xxx123@gmail.com</p>
        </div>

        <div className="mb-2 flex gap-2">
          <p className="w-4/12 text-end">職稱：</p>
          <input
            type="text"
            value="設計師"
            className="w-full border text-center indent-3"
          />
        </div>
        <div className="mb-16 flex gap-2 ">
          <div className="w-4/12">
            <p>工作項目：</p>
          </div>
          <div className="flex w-8/12 flex-wrap gap-2">
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
        <div className="flex justify-center gap-3 ">
          <button
            className="bg-gray-200 h-10 w-32"
            onClick={() => setEditStaff(false)}
          >
            放棄變更
          </button>
          <button className="bg-gray-400 h-10 w-32 text-white">確認修改</button>
        </div>
      </div>
    </div>
  </div>
);

export default editStaff;
