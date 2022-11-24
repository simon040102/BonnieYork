import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import Image from 'next/image';
import { withRouter } from 'next/router';

import Layout from '../modules/layout';

import SignupInf from '../components/signupInf';
import Finish from '../src/images/finished.png';
import ChangePassword from '../components/changePassword';
const changePassword = ({ router }) => {
  const token = router.query.token;
  const [status, setStatus] = useState('member');
  const [page, setPage] = useState(1);
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
  console.log(token);
  console.log(inf);
  useEffect(() => {}, []);
  return (
    <Layout title="邦尼約克Bonnie York 註冊">
      <div className="container mx-auto w-11/12 pt-10 md:w-8/12 lg:w-6/12">
        <h2 className="mb-10 text-center text-4xl">修改密碼</h2>
        <ChangePassword setInf={setInf} inf={inf} handleChange={handleChange} />
        <div className="flex justify-center">
          <button className="h-10 w-32 bg-primary">確認修改</button>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(changePassword);
