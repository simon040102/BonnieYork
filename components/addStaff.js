import React from 'react'

const addStaff = (props) => {
    const {setAddStaff}=props
  return (
    <>
      <div className="fixed  z-10 h-full  overflow-y-auto top-0 w-full flex justify-center bg-black/50">
        <div
          data-aos="zoom-in"
          className="relative w-96 h-fit mt-20  bg-white border border-black"
        >
          <div className="px-5 py-5">
            <h2 className="text-2xl text-center mb-8">新增員工</h2>
            <div className="flex mb-4">
              <p className="w-3/12 text-end">Email：</p>
              <input type="mail" className="border w-9/12" />
            </div>
            <div className="flex  mb-4">
              <p className="w-3/12 text-end">職稱：</p>
              <input type="mail" className="border w-9/12" />
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
            <div className="flex justify-center gap-3 ">
              <button
                className="bg-gray-200 w-32 h-10"
                onClick={() => {
                  setAddStaff(false);
                }}
              >
                取消
              </button>
              <button className="bg-gray-400 text-white w-32 h-10">
                發送邀請信件
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default addStaff