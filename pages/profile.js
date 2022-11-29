import React, { useState } from 'react';
import Head from 'next/head';

import Layout from '../modules/layout';
import { useThem } from '../modules/context';

import MemberProfile from '../components/memberProfile';
import StaffProfile from '../components/staffProfile';
import StoreProfile from '../components/storeProfile';

const profile = () => {
  const [inf, setInf] = useState({});
  const { data, setData } = useThem();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInf((preState) => {
      return {
        ...preState,
        [name]: value,
      };
    });
  };
  return (
    <>
      <Head>
        {data.status === 'member' && <title>會員資訊</title>}
        {data.status === 'staff' && <title>個人資訊</title>}
        {data.status === 'store' && <title>店鋪資訊</title>}
      </Head>
      <Layout>
        <div className="pt-20">
          {data.status === 'member' && (
            <MemberProfile
              handleChange={handleChange}
              inf={inf}
              setInf={setInf}
            />
          )}
          {data.status === 'staff' && (
            <StaffProfile handleChange={handleChange} inf={inf} />
          )}
          {data.status === 'store' && <StoreProfile />}
        </div>
      </Layout>
    </>
  );
};

export default profile;
