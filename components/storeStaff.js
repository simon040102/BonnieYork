/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import Link from 'next/link';
import Facebook from '../src/images/facebook-logo.svg';
import Instagram from '../src/images/instagram-logo.svg';
import Line from '../src/images/LINE-logo.svg';

const storeStaff = ({ StaffInformation, staffTitle }) => {
  const showStaff = () =>
    StaffInformation.map((item, index) => {
      const showItem = () => {
        const array = [];
        item.StaffWorkItems?.forEach((staffWork) => {
          array.push(staffWork.ItemName);
        });
        return array.join('、');
      };
      return (
        <li
          key={index}
          className=" mb-12 flex h-40 w-full rounded-lg bg-white shadow-lg"
        >
          <div className="relative aspect-square w-48">
            <img
              alt=""
              src={item.HeadShot}
              className="absolute left-8 -top-6 aspect-square w-36 rounded-full object-cover drop-shadow-[0_6px_0px_rgba(0,101,159,100)]"
            />
          </div>
          <div className="relative w-3/5 p-4">
            <p className="mb-1 text-xl font-bold">
              {item.StaffName}{' '}
              <span className="ml-4 text-sm font-normal text-input">
                {staffTitle}
              </span>
            </p>
            <p className="mb-1 text-input">{showItem()}</p>
            <div className="absolute bottom-4 right-4 flex  gap-3">
              <Link
                className={`w-16 ${item.FacebookLink === null && 'hidden'}`}
                href={item.FacebookLink || ''}
              >
                <a>
                  <Image src={Facebook} width="40" height="40" />
                </a>
              </Link>

              <Link
                className={`w-16 ${item.InstagramLink === null && 'hidden'}`}
                href={item.InstagramLink || ''}
              >
                <a>
                  <Image src={Instagram} width="40" height="40" />
                </a>
              </Link>
              <Link
                className={`w-16 ${item.LineLink === null && 'hidden'}`}
                href={item.LineLink || ''}
              >
                <a>
                  <Image src={Line} width="40" height="40" />
                </a>
              </Link>
            </div>
          </div>
        </li>
      );
    });

  return <ul className="w-full px-2 ">{showStaff()}</ul>;
};

export default storeStaff;
