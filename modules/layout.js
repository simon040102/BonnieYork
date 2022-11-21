import Link from 'next/link';
import Head from 'next/head';
import Logo from '../src/images/logo.png';
import LogoNav from '../src/images/logo_nav.png';
import Image from 'next/image';
import Facebook from '../src/images/facebook_home.png';
import Instagram from '../src/images/instagram_home.png';
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
          <a>
            
            登入/註冊
          </a>
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
        <header className="py-3 bg-white   z-20  w-full sticky top-0 shadow-md  ">
          <div className="flex justify-between  container mx-auto">
            <Link href="/" className=" flex my-auto items-end">
              <a>
                <Image src={LogoNav} objectFit="contain" width="300" />
              </a>
            </Link>
            <div className="flex items-center gap-5 my-auto">
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
        <div className=" pt-20  mb-auto">{children}</div>

        <footer className=" mt-16 pt-4   ">
          {router === '/' ? (
            <div className=" mx-auto flex justify-between">
              <div className=" bg-footer w-1/3 py-16  pl-[10%]  ">
                <div className="w-2/4 h-72">
                  <Image
                    src={Logo}
                    objectFit="contain"
                    height="75"
                    className="mx-auto mb-2"
                  />
                  <p className="text-center text-success mb-8">
                    info@bonnieyork.com
                  </p>
                  <div className="flex justify-center gap-4 mb-10">
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
                  <Link href="/" className=" text-success">
                    <a className="block text-center">使用者協議</a>
                  </Link>

                  <Link href="/" className=" text-success ">
                    <a className="block text-center">隱私權政策</a>
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
                      <a>
                        <Image className="my-auto " objectFit='contain'height={80} src={Logo} />
                      </a>
                    </Link>
                    <a>
                      <p className="text-lg mt-2">inf@bonnieyork.com</p>
                    </a>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div>
                      <Link href="/">
                        <a>
                          <Image
                            className="my-auto "
                            width={50}
                            height={50}
                            src={Facebook}
                          />
                        </a>
                      </Link>
                    </div>
                    <Link href="/">
                      <a>
                        <Image
                          className="my-auto"
                          width={50}
                          height={50}
                          src={Instagram}
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-footerR ">
                <div className="container mx-auto flex justify-center text-white py-3">
                
                  <div className="  flex gap-7">
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
