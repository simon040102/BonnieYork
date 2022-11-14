import React from 'react'
import MemberInf from '../components/memberInf'
import StoreInf from '../components/storeInf'
import StaffInf from '../components/staffInf'
import Profile from '../src/images/profile.png';
import Edit from '../src/images/pencil.svg';
import Image from 'next/image';

const signupInf = (props) => {
    const { status, setInf, page, inf, handleChange } = props;
    

  return (
    <div className="w-11/12 md:w-8/12 lg:w-6/12  mx-auto flex   justify-between">
      <div className="w-40 relative  h-40 flex justify-center">
        <Image src={Profile} className="" />
        <button className="absolute shadow-md border-black bg-gray-100 rounded-full p-1 right-0 bottom-0">
          <Image src={Edit} />
        </button>
      </div>
      {status == 'member' && (
        <MemberInf
          page={page}
          setInf={setInf}
          inf={inf}
          handleChange={handleChange}
        />
      )}
      {status == 'store' && (
        <StoreInf
          page={page}
          setInf={setInf}
          inf={inf}
          handleChange={handleChange}
        />
      )}
      {status == 'staff' && (
        <StaffInf
          page={page}
          setInf={setInf}
          inf={inf}
          handleChange={handleChange}
        />
      )}
    </div>
  );
}

export default signupInf