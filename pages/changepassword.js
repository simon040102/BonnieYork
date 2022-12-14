/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
import { useEffect, useState } from 'react';

import { withRouter } from 'next/router';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../modules/layout';
import { useThem } from '../modules/context';
import ChangePassword from '../components/changePassword';

const changePassword = ({ router }) => {
  const { token } = router.query;
  const { apiUrl, setLoading } = useThem();
  const [inf, setInf] = useState({});
  const [click, setClick] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInf((preState) => ({
      ...preState,
      [name]: value,
    }));
  };
  console.log(click);
  const handleSubmit = () => {
    console.log(inf);
    setLoading(true);
    const config = {
      method: 'post',
      url: `${apiUrl}/user/ForgetPassword`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: inf,
    };
    axios(config)
      .then((res) => {
        console.log(res);
        setLoading(false);
        toast.success('修改成功', {
          position: 'top-center',
          autoClose: 1000,
        });
        setTimeout(() => {
          router.push('/login');
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  console.log(token);
  console.log(inf);

  useEffect(() => {
    const passwordTest = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/;
    if (inf?.Password === '' || inf?.CheckPassword === '') {
      setClick(false);
    }
    if (!passwordTest.test(inf?.Password)) {
      setClick(false);
    }
    if (inf?.Password !== inf?.CheckPassword) {
      setClick(false);
    } else {
      setClick(true);
    }
  }, [inf]);
  return (
    <Layout title="邦尼約克Bonnie York 註冊">
      <div className="container mx-auto mt-20 w-11/12 rounded-lg bg-white pt-10 pb-8 shadow-lg md:w-8/12 lg:w-6/12">
        <h2 className="mb-10 text-center text-3xl">修改密碼</h2>
        <ChangePassword setInf={setInf} inf={inf} handleChange={handleChange} />
        <div className="flex justify-center">
          <button
            className="h-10 w-32 rounded-lg bg-secondary text-white"
            onClick={handleSubmit}
            disabled={!click}
          >
            確認修改
          </button>
        </div>
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default withRouter(changePassword);
