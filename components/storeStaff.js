import React from 'react'
import Image from 'next/image';
import Pig from '../src/images/pig.jpg'
import Facebook from '../src/images/facebook1.svg';
import Instagram from '../src/images/instagram1.svg';
import Line from '../src/images/Line1.svg';
import Link from 'next/link';

const storeStaff = () => {
  return (
    <>
      <ul className="w-full px-2 md:px-0 sm:w-3/4 lg:w-1/2">
        <li className="w-ful h-52 border border-black flex mb-6">
          <Image src={Pig} className="w-2/5 object-cover" />
          <div className="p-4 relative">
            <p className="mb-1">暱稱：可愛粉紅豬</p>
            <p className="mb-1">職稱：設計師</p>
            <p className="mb-1">
              工作項目：男士剪髮、女士剪髮、燙髮、染髮、粉紅吹風機
            </p>
            <div className="flex w-1/3 gap-3 absolute bottom-4 right-4">
              <Link className="w-16" href="/">
                <Image src={Facebook} />
              </Link>
              <Link className="w-16" href="/">
                <Image src={Instagram} />
              </Link>
              <Link className="w-16" href="/">
                <Image src={Line} />
              </Link>
            </div>
          </div>
        </li>
        <li className="w-ful h-52 border border-black flex mb-6">
          <Image src={Pig} className="w-2/5 object-cover" />
          <div className="p-4 relative">
            <p className="mb-1">暱稱：可愛粉紅豬</p>
            <p className="mb-1">職稱：設計師</p>
            <p className="mb-1">
              工作項目：男士剪髮、女士剪髮、燙髮、染髮、粉紅吹風機
            </p>
            <div className="flex w-1/3 gap-3 absolute bottom-4 right-4">
              <Link className="w-16" href="/">
                <Image src={Facebook} />
              </Link>
              <Link className="w-16" href="/">
                <Image src={Instagram} />
              </Link>
              <Link className="w-16" href="/">
                <Image src={Line} />
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}

export default storeStaff