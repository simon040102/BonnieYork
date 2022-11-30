import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '../src/images/logo.png';
import Facebook from '../src/images/facebook_home.png';
import Instagram from '../src/images/instagram_home.png';
const SimpleFooter = () => {
  return (
    <div className=" -mb-20  ">
      <div className="bg-footerL pt-4">
        <div className="container mx-auto flex justify-between px-4 py-2 sm:px-0">
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
              <p className="mt-2 text-center text-sm">inf@bonnieyork.com</p>
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
  );
};

export default SimpleFooter;
