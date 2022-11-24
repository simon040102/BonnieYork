import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Menu from '../components/Menu';
import SampleFooter from '../components/SampleFooter';
import HomeFooter from '../components/homeFooter';

import LogoNav from '../src/images/logo_nav.png';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Layout = ({ children, title, descriptionContent, setStatus, test }) => {
  const [account, setAccount] = useState('customer');
  const router = useRouter().pathname;
  const status = () => {
    if (account == 'customer')
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
    else {
      return <Menu status={account} />;
    }
  };
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{title}</title>
        <meta name="description" content={descriptionContent} />
      </Head>
      <div className="sticky top-0 -mt-20 flex min-h-screen flex-col justify-between">
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
              {account == 'customer' && (
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
        <div className="mb-auto  pt-20">{children}</div>

        <footer className=" pt-4">
          {router === '/' ? (
            <>
              <div className="hidden md:block">
                <HomeFooter />
              </div>
              <div className="block md:hidden">
                <SampleFooter />
              </div>
            </>
          ) : (
            <SampleFooter />
          )}
        </footer>
      </div>
    </>
  );
};
export default Layout;
