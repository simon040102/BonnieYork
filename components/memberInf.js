import React from 'react';
import Image from 'next/image';
import Profile from '../src/images/profile.png';
import Edit from '../src/images/pencil.svg';

const memberInf = ({ setInf, page, inf, handleChange }) => {
  return (
    <>
      {page == 2 && (
        <>
          <div className="w-full">
            <div className="relative">
              <p className="absolute -top-2.5 left-4 bg-white px-2 text-black">
                *用戶名稱
              </p>
              <input
                name="CustomerName"
                value={inf.CustomerName}
                type="text"
                className="mb-6 mr-2 h-12 w-full rounded-lg border border-black indent-3"
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <p className="absolute -top-2.5 left-4 bg-white px-2 text-black">
                *手機號碼
              </p>
              <input
                type="text"
                name="CellphoneNumber"
                value={inf.CellphoneNumber}
                className="mb-6 mr-2 h-12 w-full rounded-lg border border-black indent-3"
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <p className="absolute -top-2.5 left-4 bg-white px-2 text-black">
                生日
              </p>
              <input
                type="date"
                name="birthday"
                value={inf.birthday}
                className="mb-6 mr-2 h-12 w-full rounded-lg border border-black indent-3"
                onChange={handleChange}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default memberInf;
