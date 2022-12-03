/* eslint-disable jsx-a11y/label-has-associated-control */
import Image from 'next/image';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const storeBanner = ({ handleChange }) => (
  <div>
    <div className="relative flex  w-40 bg-footerL text-white">
      <label
        htmlFor="upload"
        className=" flex h-24 w-full cursor-pointer rounded-lg "
      >
        <div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            <AddCircleOutlineIcon sx={{ color: '#00659F', fontSize: 40 }} />\
          </div>
          <Image />
        </div>
      </label>
      <input
        type="file"
        id="upload"
        accept="image/png, image/jpeg"
        className="hidden"
        onChange={handleChange}
      />
    </div>
  </div>
);

export default storeBanner;
