import React from 'react';

const addStaff = ({ setAddStaff }) => {
  return (
    <>
      <div className="fixed  top-0 z-10  flex h-full w-full justify-center overflow-y-auto bg-black/50">
        <div
          data-aos="zoom-in"
          className="relative mt-20 h-fit w-96  border border-black bg-white"
        >
          <div className="px-5 py-5">
            <h2 className="mb-8 text-center text-2xl">新增員工</h2>
            <div className="mb-4 flex">
              <p className="w-3/12 text-end">Email：</p>
              <input type="mail" className="w-9/12 border" />
            </div>
            <div className="mb-4  flex">
              <p className="w-3/12 text-end">職稱：</p>
              <input type="mail" className="w-9/12 border" />
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
                onClick={() => setAddStaff(false)}
              >
                取消
              </button>
              <button className="bg-gray-400 h-10 w-32 text-white">
                發送邀請信件
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default addStaff;
