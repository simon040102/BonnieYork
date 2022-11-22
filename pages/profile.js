import React, { useState } from 'react';
import Head from 'next/head';

import Layout from '../modules/layout';

import MemberProfile from '../components/memberProfile';
import StaffProfile from '../components/staffProfile';
import StoreProfile from '../components/storeProfile';

const profile = () => {
  const [status, setStatus] = useState('store');
  const [inf, setInf] = useState({});

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
    <div>
      <Head>
        {status == 'member' && <title>會員資訊</title>}
        {status == 'staff' && <title>個人資訊</title>}
        {status == 'store' && <title>店鋪資訊</title>}
      </Head>
      <Layout>
        <div className="pt-20">
          {status == 'member' && (
            <MemberProfile handleChange={handleChange} inf={inf} />
          )}
          {status == 'staff' && (
            <StaffProfile handleChange={handleChange} inf={inf} />
          )}
          {status == 'store' && <StoreProfile />}
        </div>
      </Layout>
    </div>
  );
};

export default profile;
