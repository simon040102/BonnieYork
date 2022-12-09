/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-console */
/* eslint-disable react/function-component-definition */
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import axios from 'axios';
import Menu from '../components/Menu';
import SimpleFooter from '../components/SimpleFooter';
import { useThem } from './context';
import HomeFooter from '../components/homeFooter';
import IsLoading from '../components/isLoading';

import LogoNav from '../src/images/logo_nav.png';

const Layout = ({ children, title, descriptionContent }) => {
  const { data, setData, loading, apiUrl } = useThem();
  const routerName = useRouter().pathname;
  const router = useRouter();
  console.log(data);
  const status = () => {
    if (data.status === 'customer')
      return (
        <div className="flex">
          <Link href="/login">
            <a>
              <PersonOutlineOutlinedIcon color="primary" />
            </a>
          </Link>
          <Link href="/login">
            <a className="mx-2 hidden text-secondary sm:block">登入/註冊</a>
          </Link>
        </div>
      );

    return <Menu />;
  };
  useEffect(() => {
    const Authorization = localStorage.getItem('BonnieYork');
    if (data.Account) {
      return;
    }
    if (Authorization?.split(' ')[1] !== 'undefined') {
      axios
        .get(`${apiUrl}/user/VerifyUser`, {
          headers: { Authorization },
        })
        .then((res) => {
          console.log(res);
          const result = res.data;
          setData((preState) => ({
            ...preState,
            status: result.Identity,
            name:
              result?.CustomerName || result?.StaffName || result?.StoreName,
            Account: result?.Account,
            HeadShot: result?.HeadShot,
            StoreName: result?.StoreName,
          }));
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem('BonnieYork');
          if (
            routerName !== '/login' &&
            routerName !== '/search' &&
            routerName !== '/signup' &&
            routerName !== '/store'
          ) {
            router.push('/');
          }
        });
    }
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{title || '邦尼約克Bonnie'}</title>
        <meta name="description" content={descriptionContent} />
      </Head>
      <div className="sticky top-0 -mt-20 flex min-h-screen flex-col justify-between">
        <div className="sticky -top-menu z-50 ">{loading && <IsLoading />}</div>
        <div className="sticky -top-menu -z-10">
          <div className="absolute top-0  mt-20 h-screen w-screen bg-bgColor" />
        </div>
        <header className="sticky top-0 z-20  w-full  bg-white px-5 shadow-md  sm:px-0  ">
          <div className="container mx-auto  flex justify-between">
            <Link href="/" className="my-auto flex items-end">
              <a>
                <Image src={LogoNav} objectFit="contain" width="200" />
              </a>
            </Link>
            <div className="my-auto flex items-center gap-5">
              <Link href="/search">
                <a>店家搜尋</a>
              </Link>
              {data.status === 'customer' && routerName === '/' && (
                <>
                  <Link href="#feature">
                    <a className="hidden md:block">功能特色</a>
                  </Link>
                  <Link href="#store">
                    <a className="hidden md:block">合作店家</a>
                  </Link>
                </>
              )}

              {status()}
            </div>
          </div>
        </header>

        <div className="mb-auto pb-20 pt-20">{children}</div>
        <footer className="  ">
          {router === '/' ? (
            <>
              <div className="hidden md:block">
                <HomeFooter />
              </div>
              <div className="block md:hidden">
                <SimpleFooter />
              </div>
            </>
          ) : (
            <SimpleFooter />
          )}
        </footer>
      </div>
    </>
  );
};
export default Layout;
