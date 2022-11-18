import Link from 'next/link';
import Head from 'next/head';
import Logo from '../src/images/logo.png';
import Image from 'next/image';
import Facebook from '../src/images/facebook.svg';
import Instagram from '../src/images/instagram.svg';
import React, { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Router from 'next/router';
import { useRouter } from 'next/router';
const Layout = ({ children, title }) => {
  const [account, setAccount] = useState('customer');
  const router = useRouter().pathname;
  console.log(router)
  const status = () => {
    if (account == 'customer')
      return (
        <Link className="mx-2 text-secondary" href="/login">
          <PersonOutlineOutlinedIcon/>登入/註冊
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
      <div className="  sticky top-0 -mt-20 flex flex-col min-h-screen justify-between">
        <header className="py-6   bg-white  Pb-20 z-20  w-full sticky top-0 shadow-md  ">
          <div className="flex justify-between px-6 container mx-auto">
            <Link href="/" className=" flex my-auto items-end">
              <Image className="my-auto " width={80} src={Logo} />

              <h1 className="text-3xl font-bold text-primary">onnie York</h1>
            </Link>
            <div className="flex my-auto ">
              <Link className="mx-2  " href="/search">
                店家搜尋
              </Link>
              {account == 'customer' && (
                <>
                  <Link className="mx-2" href="#feature">
                    功能特色
                  </Link>
                  <Link className="mx-2" href="#store">
                    合作店家
                  </Link>
                </>
              )}

              {status()}
            </div>
          </div>
        </header>
        <div className=" pt-20  mb-auto">{children}</div>

        <footer className=" mt-16 pt-4   ">
          {router == '/'  ? (
            <div className=" mx-auto flex justify-between">
              <div className=" bg-footer w-1/3 py-16  pl-[10%]  ">
                <div className="w-2/4 h-72">
                  <Image src={Logo} width={83} className="mx-auto mb-2" />
                  <p className="text-center text-success mb-10">
                    info@bonnieyork.com
                  </p>
                  <div className="flex justify-center gap-4 mb-10">
                    <Link href={'/'}>
                      <Image src={Facebook} width={40} />
                    </Link>
                    <Link href={'/'}>
                      <Image src={Instagram} width={40} />
                    </Link>
                  </div>
                  <Link
                    href={'/'}
                    className=" text-success block mb-4 text-center"
                  >
                    使用者協議
                  </Link>
                  <Link href={'/'} className=" text-success block text-center">
                    隱私權政策
                  </Link>
                </div>
                <div className="mx-auto after:absolute after:left-0 after:bottom-2.5 after:h-footer  after:-z-10 after:w-7/12 after:rounded-tr-block after:bg-footerL after:content-['']"></div>
              </div>
              <div className="w-2/3 flex items-end">
                <div className=" bg-footerR w-full rounded-tl-block h-72 items-end pl-24 pt-16  pr-[10%]">
                  <div className="flex ">
                    <div className="w-9/12">
                      <h3 className="text-white text-6xl font-bold border-b pb-5 mb-5">
                        JOIN US!
                      </h3>
                      <p className="text-white text-xl">
                        趕快加入我們，擁有自己的預約平台
                      </p>
                    </div>
                    <div className="w-3/12">
                      <div className=" h-32 w-32 mt-4">
                        <button
                          className="bg-white text-footerR w-full h-full rounded-full font-bold text-xl"
                          onClick={() => {
                            Router.push('/login');
                          }}
                        >
                          立即
                          <br />
                          試用
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-16 pt-4 -mb-20">
              <div className="bg-footerL">
                <div className="container mx-auto py-8 flex justify-between mb-2">
                  <div>
                    <Link href="/" className=" flex my-auto items-end">
                      <Image className="my-auto " width={80} src={Logo} />

                      <h1 className="text-3xl font-bold text-primary">
                        onnie York
                      </h1>
                    </Link>
                    <p className="text-lg mt-2">inf@bonnieyork.com</p>
                  </div>
                  <div className="flex gap-4">
                    <Link href={'/'}>
                      <Image className="my-auto " width={50} src={Facebook} />
                    </Link>
                    <Link href={'/'}>
                      <Image className="my-auto" width={50} src={Instagram} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-footerR ">
                <div className="container mx-auto flex justify-center text-white py-3">
                  <div className="  flex gap-7">
                    <Link className="" href="/">
                      使用者協議
                    </Link>
                    <p>|</p>
                    <Link className="" href="/">
                      隱私權政策
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </footer>
      </div>
    </>
  );
};
export default Layout;
