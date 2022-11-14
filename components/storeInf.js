import React from 'react';
import Finish from '../src/images/finished.svg'
import Image from 'next/image';

const storeInf = (props) => {
  const {  page, inf, handleChange } = props;

  return (
    <>
      {page == 2 && (
        <div className="w-8/12">
          <div className="w-full">
            <p>*店鋪名稱：</p>
            <input
              name="name"
              value={inf.name}
              type="text"
              className="border-black border w-full mb-4 h-10 indent-3"
              onChange={handleChange}
            />
            <p>*地址</p>
            <div className="flex">
              <select
                name="county"
                value={inf.county}
                className="border-black border w-full mb-4 h-10 indent-3 mr-2"
                onChange={handleChange}
              >
                <option value="縣市">縣市</option>
              </select>
              <select
                name="area"
                value={inf.area}
                className="border-black border w-full mb-4 h-10 indent-3 ml-2"
                onChange={handleChange}
              >
                <option value="縣市">地區</option>
              </select>
            </div>
            <input
              name="address"
              value={inf.address}
              type="text"
              className="border-black border w-full mb-4 h-10 indent-3"
              onChange={handleChange}
            />
            <p>*手機號碼：</p>
            <input
              type="text"
              name="phone"
              value={inf.phone}
              className="border-black border w-full mb-4 h-10 indent-3"
              onChange={handleChange}
            />
            <p>市話</p>
            <input
              type="text"
              name="phone"
              value={inf.phone}
              className="border-black border w-full mb-4 h-10 indent-3"
              onChange={handleChange}
            />
          </div>
        </div>
      )}
      
    </>
  );
};

export default storeInf;
