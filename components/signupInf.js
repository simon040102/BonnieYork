/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */

import Image from 'next/image';
import FlipCameraIosIcon from '@mui/icons-material/FlipCameraIos';
import { useThem } from '../modules/context';

import MemberInf from './memberInf';
import StoreInf from './storeInf';
import StaffInf from './staffInf';
import Profile from '../src/images/profile.png';

const signupInf = ({
  setInf,
  page,
  inf,
  handleChange,
  headShotPreview,
  ChangeHeadShot,
  headShot,
}) => {
  const { data } = useThem();

  return (
    <div className="relative mx-auto w-11/12 px-8 lg:w-8/12 lg:px-0">
      <div className="relative mb-4 flex  w-full justify-center">
        <div className="relative">
          {headShotPreview ? (
            <img
              src={headShotPreview}
              alt=""
              className={`h-40 w-40 rounded-full object-cover `}
            />
          ) : (
            <div className={`h-40 w-40  ${inf?.HeadShot && 'hidden'}`}>
              <Image src={Profile} className="rounded-full" />
            </div>
          )}

          <label
            htmlFor="headShot"
            className="bg-gray-100 absolute right-0 bottom-0 rounded-full bg-secondary py-1 px-2 shadow-md"
          >
            <FlipCameraIosIcon sx={{ color: '#ffffff' }} />
          </label>
          <input
            type="file"
            id="headShot"
            accept="image/png, image/jpeg"
            className="hidden"
            onChange={ChangeHeadShot}
          />
        </div>
      </div>
      {data.status === 'member' && (
        <MemberInf
          page={page}
          setInf={setInf}
          inf={inf}
          handleChange={handleChange}
          headShot={headShot}
        />
      )}
      {data.status === 'store' && (
        <StoreInf
          page={page}
          setInf={setInf}
          inf={inf}
          handleChange={handleChange}
          headShot={headShot}
        />
      )}
      {data.status === 'staff' && (
        <StaffInf
          page={page}
          setInf={setInf}
          inf={inf}
          handleChange={handleChange}
          headShot={headShot}
        />
      )}
    </div>
  );
};

export default signupInf;
