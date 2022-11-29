import React from 'react';

import GetCity from './areaData/getCity';
import GetArea from './areaData/getArea';

const storeInf = ({ page, inf, handleChange }) => {
  return (
    <>
      {page == 2 && (
        <div className="relative w-full">
          <p className="absolute -top-2.5 left-4 bg-white px-2 text-black">
            *店鋪名稱
          </p>
          <input
            name="name"
            value={inf.name}
            type="text"
            className="mb-6 h-12 w-full rounded-lg border border-black indent-3 "
            onChange={handleChange}
          />
          <p>*地址</p>
          <div className="flex gap-2">
            <div className="w-full">
              <select
                name="city"
                value={inf.county}
                className="mb-6 mr-2 h-12 w-full rounded-lg border border-black indent-3"
                onChange={handleChange}
              >
                <option value="縣市">縣市</option>
                <GetCity />
              </select>
            </div>
            <div className="w-full">
              <select
                name="area"
                value={inf.area}
                className="mb-6  h-12 w-full rounded-lg border border-black indent-3"
                onChange={handleChange}
              >
                <option value="縣市">地區</option>
                <GetArea city={inf?.city} />
              </select>
            </div>
          </div>

          <input
            name="address"
            value={inf.address}
            type="text"
            className="mb-6 h-12 w-full rounded-lg border border-black indent-3"
            placeholder="ex:信義路123號"
            onChange={handleChange}
          />
          <div className="relative">
            <p className="absolute -top-2.5 left-4 bg-white px-2 text-black">
              *手機號碼
            </p>
            <input
              type="text"
              name="phone"
              value={inf.phone}
              className="mb-6 mr-2 h-12 w-full rounded-lg border border-black indent-3"
              onChange={handleChange}
            />
          </div>
          <div className="relative">
            <p className="absolute -top-2.5 left-4 bg-white px-2 text-black">
              市話
            </p>
            <input
              type="text"
              name="phone"
              value={inf.phone}
              className="mb-6 h-12 w-full rounded-lg border border-black indent-3"
              onChange={handleChange}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default storeInf;
