import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '../src/images/logo.png';
import Facebook from '../src/images/facebook_home.png';
import Instagram from '../src/images/instagram_home.png';
const homeFooter = () => {
  return (
    <div className="mx-auto flex justify-between">
      <div className="bg-footer w-1/3 py-16  pl-[10%]  ">
        <div className="h-72 w-2/4">
          <Image
            src={Logo}
            objectFit="contain"
            height="75"
            className="mx-auto mb-2"
          />
          <p className="mb-8 text-center text-success">info@bonnieyork.com</p>
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
  );
};

export default homeFooter;
