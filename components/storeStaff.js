import Image from 'next/image';
import Link from 'next/link';
import Pig from '../src/images/pig.jpg';
import Facebook from '../src/images/facebook1.svg';
import Instagram from '../src/images/instagram1.svg';
import Line from '../src/images/Line1.svg';

const storeStaff = () => (
  <ul className="w-full px-2 ">
    <li className="w-ful mb-6 flex h-52 border border-black">
      <Image src={Pig} className="w-2/5 object-cover" />
      <div className="relative p-4">
        <p className="mb-1">暱稱：可愛粉紅豬</p>
        <p className="mb-1">職稱：設計師</p>
        <p className="mb-1">
          工作項目：男士剪髮、女士剪髮、燙髮、染髮、粉紅吹風機
        </p>
        <div className="absolute bottom-4 right-4 flex w-1/3 gap-3">
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
    <li className="w-ful mb-6 flex h-52 border border-black">
      <Image src={Pig} className="w-2/5 object-cover" />
      <div className="relative p-4">
        <p className="mb-1">暱稱：可愛粉紅豬</p>
        <p className="mb-1">職稱：設計師</p>
        <p className="mb-1">
          工作項目：男士剪髮、女士剪髮、燙髮、染髮、粉紅吹風機
        </p>
        <div className="absolute bottom-4 right-4 flex w-1/3 gap-3">
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
);

export default storeStaff;
