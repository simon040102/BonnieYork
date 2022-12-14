/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */

import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const storeItem = ({ SetReserve, item, setReserveInf }) => {
  console.log(item);

  const showItem = () =>
    item.map((BusinessItem, index) => (
      <li
        key={index}
        className="mb-6 flex h-60 w-full rounded-lg bg-white shadow-lg"
      >
        <img
          src={BusinessItem.PicturePath}
          alt=""
          className="w-2/5 rounded-l-lg object-cover"
        />

        <div className="relative w-3/5 p-4">
          <div className="mb-4 flex justify-between gap-3">
            <h2 className="font-bold ">{BusinessItem.ItemName}</h2>
            <div className="flex gap-2">
              <div className="flex gap-1 text-sm ">
                <AccessTimeOutlinedIcon
                  sx={{ fontSize: 20, color: '#00659F' }}
                />
                <p className=" text-secondary">{BusinessItem.SpendTime}</p>
              </div>
              <div className="flex gap-1 text-sm">
                <MonetizationOnOutlinedIcon
                  sx={{ fontSize: 20, color: '#00659F' }}
                />
                <p className=" text-secondary">{BusinessItem.Price}</p>
              </div>
            </div>
          </div>
          <p className="mb-4">{BusinessItem.Describe}</p>
          <button
            className="tryIt absolute bottom-4 right-4   flex w-36 justify-center gap-3 rounded-tl-sm rounded-tr-full  bg-secondary py-2  text-white"
            onClick={() => {
              SetReserve(true);
              setReserveInf((prevState) => ({
                ...prevState,
                ItemId: BusinessItem.Id,
              }));
            }}
          >
            <p>我要預約</p>
            <ArrowCircleRightOutlinedIcon sx={{ fontSize: '24px' }} />
          </button>
        </div>
      </li>
    ));
  return <ul className="w-full px-2 ">{showItem()}</ul>;
};

export default storeItem;
