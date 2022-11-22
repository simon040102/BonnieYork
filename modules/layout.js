import Link from 'next/link';
import Head from 'next/head';
import Logo from '../src/images/logo.png';
import LogoNav from '../src/images/logo_nav.png';
import Image from 'next/image';
import Facebook from '../src/images/facebook_home.png';
import Instagram from '../src/images/instagram_home.png';
import React, { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import Router from 'next/router';
import { useRouter } from 'next/router';
const Layout = ({ children, title, descriptionContent, setStatus, test }) => {
  const [account, setAccount] = useState('customer');
  const router = useRouter().pathname;
  const status = () => {
    if (account == 'customer')
      return (
        <Link className="mx-2 text-secondary" href="/login">
          <a>登入/註冊</a>
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
        <title>{title}</title>
        <meta name="description" content={descriptionContent} />
      </Head>
      <div className="sticky top-0 -mt-20 flex min-h-screen flex-col justify-between">
        <header className="sticky top-0   z-20  w-full bg-white  shadow-md  ">
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
                    <a>功能特色</a>
                  </Link>
                  <Link href="#store">
                    <a>合作店家</a>
                  </Link>
                </>
              )}

              {status()}
            </div>
          </div>
        </header>
        <div className="mb-auto  pt-20">{children}</div>

        <footer className="mt-16 pt-4   ">
          {router === '/' ? (
            <div className="mx-auto flex justify-between">
              <div className="bg-footer w-1/3 py-16  pl-[10%]  ">
                <div className="h-72 w-2/4">
                  <Image
                    src={Logo}
                    objectFit="contain"
                    height="75"
                    className="mx-auto mb-2"
                  />
                  <p className="mb-8 text-center text-success">
                    info@bonnieyork.com
                  </p>
                  <div className="mb-10 flex justify-center gap-4">
                    <Link href="/">
                      <a>
                        <Image src={Facebook} width="50" height="50" />
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <Image src={Instagram} width="50" height="50" />
                      </a>
                    </Link>
                  </div>
                  <Link href="/" className="text-success">
                    <a className="block text-center">使用者協議</a>
                  </Link>

                  <Link href="/" className="text-success ">
                    <a className="block text-center">隱私權政策</a>
                  </Link>
                </div>
                <div className="mx-auto after:absolute after:left-0 after:bottom-2.5 after:-z-10  after:h-footer after:w-7/12 after:rounded-tr-block after:bg-footerL after:content-['']"></div>
              </div>
              <div className="flex w-2/3 items-end">
                <div className="h-72 w-full items-end rounded-tl-block bg-footerR pl-24 pt-16  pr-[10%]">
                  <div className="flex ">
                    <div className="w-9/12">
                      <h3 className="mb-5 border-b pb-5 text-6xl font-bold text-white">
                        JOIN US!
                      </h3>
                      <p className="text-xl text-white">
                        趕快加入我們，擁有自己的預約平台
                      </p>
                    </div>
                    <div className="w-3/12">
                      <div className="mt-4 h-32 w-32">
                        <button
                          className="h-full w-full rounded-full bg-white text-xl font-bold text-footerR"
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
            <div className="mt-16 -mb-20 pt-4">
              <div className="bg-footerL">
                <div className="container mx-auto  flex justify-between py-2">
                  <div>
                    <Link href="/" className="my-auto flex items-end">
                      <a>
                        <Image
                          className="my-auto "
                          objectFit="contain"
                          height={40}
                          src={Logo}
                        />
                      </a>
                    </Link>
                    <a>
                      <p className="mt-2 text-center text-sm">
                        inf@bonnieyork.com
                      </p>
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <Link href="/">
                        <a>
                          <Image
                            className="my-auto "
                            width={40}
                            height={40}
                            src={Facebook}
                          />
                        </a>
                      </Link>
                    </div>
                    <Link href="/">
                      <a>
                        <Image
                          className="my-auto"
                          width={40}
                          height={40}
                          src={Instagram}
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-footerR ">
                <div className="container mx-auto flex justify-center py-3 text-white">
                  <div className=" flex gap-7">
                    <Link className="" href="/">
                      <a>使用者協議</a>
                    </Link>
                    <p>|</p>
                    <Link className="" href="/">
                      <a>隱私權政策</a>
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
