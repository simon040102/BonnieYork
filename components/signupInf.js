import React from 'react';
import Image from 'next/image';

import { useThem } from '../modules/context';

import MemberInf from '../components/memberInf';
import StoreInf from '../components/storeInf';
import StaffInf from '../components/staffInf';
import Profile from '../src/images/profile.png';
import Edit from '../src/images/pencil.svg';

const signupInf = ({ setInf, page, inf, handleChange }) => {
  const { data, setData } = useThem();

  return (
    <div className="mx-auto flex w-11/12  justify-between md:w-8/12   lg:w-6/12">
      <div className="relative flex  h-40 w-40 justify-center">
        <Image src={Profile} className="" />
        <button className="bg-gray-100 absolute right-0 bottom-0 rounded-full border-black p-1 shadow-md">
          <Image src={Edit} />
        </button>
      </div>
      {data.status === 'member' && (
        <MemberInf
          page={page}
          setInf={setInf}
          inf={inf}
          handleChange={handleChange}
        />
      )}
      {data.status === 'store' && (
        <StoreInf
          page={page}
          setInf={setInf}
          inf={inf}
          handleChange={handleChange}
        />
      )}
      {data.status === 'staff' && (
        <StaffInf
          page={page}
          setInf={setInf}
          inf={inf}
          handleChange={handleChange}
        />
      )}
    </div>
  );
};

export default signupInf;
