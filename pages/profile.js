import { useState } from 'react';
import Head from 'next/head';

import Layout from '../modules/layout';
import { useThem } from '../modules/context';

import MemberProfile from '../components/memberProfile';
import StaffProfile from '../components/staffProfile';
import StoreProfile from '../components/storeProfile';

const profile = () => {
  const [inf, setInf] = useState({});
  const [dataChange, setDataChange] = useState(false);
  const { data } = useThem();
  const handleChange = (e) => {
    setDataChange(true);
    const { name, value } = e.target;
    setInf((preState) => ({
      ...preState,
      [name]: value,
    }));
  };
  console.log(inf);
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
              dataChange={dataChange}
            />
          )}
          {data.status === 'staff' && (
            <StaffProfile
              handleChange={handleChange}
              inf={inf}
              setInf={setInf}
              dataChange={dataChange}
            />
          )}
          {data.status === 'store' && (
            <StoreProfile
              handleChange={handleChange}
              inf={inf}
              setInf={setInf}
              dataChange={dataChange}
            />
          )}
        </div>
      </Layout>
    </>
  );
};

export default profile;
