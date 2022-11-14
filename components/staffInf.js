import React from 'react'
import Link from 'next/link';

const staffInf = (props) => {
    const { page, inf, handleChange } = props;

  return (
    <>
      {page == 2 && (
        <div className="w-8/12">
          <div className="w-full">
            <p className="mb-4 h-10">Email：xxx123@gmail.com</p>
            <p className="mb-4 h-10">所屬店家：第五分局按摩店</p>
            <p>*名稱(暱稱)：</p>
            <input
              name="name"
              value={inf.name}
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
          </div>
          <div className="text-left mb-4">
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
      )}
     
    </>
  );
}

export default staffInf