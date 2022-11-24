import React from 'react';
import Image from 'next/image';
import Profile from '../src/images/profile.png';
import Edit from '../src/images/pencil.svg';

const memberInf = ({ setInf, page, inf, handleChange }) => {
  return (
    <>
      {page == 2 && (
        <div className="w-8/12">
          <div className="w-full">
            <p>*用戶名稱：</p>
            <input
              name="name"
              value={inf.name}
              type="text"
              className="mb-4 h-10 w-full border border-black indent-3"
              onChange={handleChange}
            />
            <p>*手機號碼：</p>
            <input
              type="text"
              name="phone"
              value={inf.phone}
              className="mb-4 h-10 w-full border border-black indent-3"
              onChange={handleChange}
            />
            <p>生日</p>
            <input
              type="date"
              name="birthday"
              value={inf.birthday}
              className="mb-4 h-10 w-full border border-black indent-1"
              onChange={handleChange}
            />
            <div className="mb-4 text-left">
              <p>性別：</p>
              <input
                type="radio"
                name="sex"
                value="male"
                checked={inf.sex == 'male'}
                className="mr-2"
                onChange={handleChange}
              />
              男性
              <input
                type="radio"
                name="sex"
                value="female"
                checked={inf.sex == 'female'}
                className="mr-2 ml-5"
                onChange={handleChange}
              />
              女性
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default memberInf;
