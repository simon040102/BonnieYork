import Link from 'next/link';
import Head from 'next/head';
import Logo from '../src/images/logo.png';
import Image from 'next/image';
import Facebook from '../src/images/facebook.svg';
import Instagram from '../src/images/instagram.svg';
import React, { useEffect, useState } from 'react';
import Menu from '../components/Menu';

const Layout = ({ children, title }) => {
  const [account, setAccount] = useState('store');

  const status = () => {
    if (account == 'customer')
      return (
        <Link className="mx-2" href="/login">
          登入/註冊
        </Link>
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
      </Head>
      <div className=" relative -mt-20 flex flex-col min-h-screen justify-between">
        <header className="py-6 ab px-6 bg-white shadow-md Pb-20 z-10 flex justify-between sticky top-0">
          <Link href="/" className=" flex my-auto ">
            <Image className="my-auto mr-2" width={50} src={Logo} />

            <h1 className="text-3xl font-bold">邦尼約克Bonnie York</h1>
          </Link>
          <div className="flex my-auto ">
            <Link className="mx-2  " href="/search">
              店家搜尋
            </Link>
            <Link className="mx-2" href="#feature">
              功能特色
            </Link>
            <Link className="mx-2" href="#store">
              合作店家
            </Link>
            {status()}
          </div>
        </header>
        <div className=" pt-20  mb-auto">{children}</div>

        <footer className="bg-gray-400 mt-16 pt-4 -mb-20  ">
          <div className="container mx-auto flex justify-between mb-2">
            <div>
              <Link href="/" className=" flex my-auto ">
                <Image className="my-auto mr-2" width={50} src={Logo} />
                <h3 className="text-3xl font-bold">邦尼約克Bonnie York</h3>
              </Link>
              <p className="text-lg mt-2">inf@bonnieyork.com</p>
            </div>
            <div className="flex">
              <Image className="my-auto mr-2" width={50} src={Facebook} />
              <Image className="my-auto mr-2" width={50} src={Instagram} />
            </div>
          </div>
          <hr />
          <div className="container mx-auto flex justify-between mt-2">
            <div className="  flex">
              <Link className="mx-2" href="/">
                使用者協議
              </Link>
              <p>|</p>
              <Link className="" href="/">
                隱私權政策
              </Link>
            </div>
            <div>2022 © 邦尼約克預約平台版權所有</div>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Layout;
