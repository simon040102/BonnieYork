/* eslint-disable react/button-has-type */
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Router from 'next/router';
import StoreSwiper from './storeSwiper';

const searchResult = ({ Result }) => {
  const showStore = () =>
    Result?.map((item) => {
      console.log(item);

      const showItem = () =>
        item.BusinessItem?.map((items, index) => {
          if (index === 4) return;
          // eslint-disable-next-line consistent-return
          return (
            <li className="rounded-full  bg-secondary px-2 py-1 text-center  text-white">
              {items.ItemName}
            </li>
          );
        });

      return (
        <li className="mb-4 w-[32%] rounded-card shadow-md">
          <div className=" mb-4 rounded-t-card">
            <StoreSwiper photo={item?.BannerPath} />
          </div>
          <div className="px-5">
            <div className="mb-4 flex justify-between pt-2">
              <h2 className="text-xl text-secondary">{item.StoreName}</h2>
              <FavoriteBorderOutlinedIcon />
            </div>
            <ul className="mb-2 flex flex-wrap gap-2">
              {showItem()} <li>...</li>
            </ul>
            <div className="mb-2 flex items-center gap-3">
              <AccessTimeOutlinedIcon />
              <div>
                <p>
                  平日：{item.WeekdayStartTime}~{item.WeekdayEndTime}
                </p>
                <p>
                  假日：{item.HolidayStartTime}~{item.HolidayEndTime}
                </p>
              </div>
            </div>
            <div className="mb-2 flex items-center gap-3">
              <LocationOnOutlinedIcon />
              <p>{item.Address}</p>
            </div>
            <p className="textCutoff mb-16 text-secondary">
              {item.Description}
            </p>
            <div className="mb-8 flex justify-center">
              <button
                className=" h-10 w-full rounded-full bg-secondary text-white"
                onClick={() => {
                  Router.push(`store/${item.Id}`);
                }}
              >
                我要預約
              </button>
            </div>
          </div>
        </li>
      );
    });

  return (
    <div className="container mx-auto w-full">
      <ul className="flex flex-wrap justify-between gap-3">{showStore()}</ul>
    </div>
  );
};

export default searchResult;
