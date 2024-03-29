/* eslint-disable consistent-return */
/* eslint-disable react/button-has-type */
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Router from 'next/router';
import axios from 'axios';
import StoreSwiper from './storeSwiper';
import { useThem } from '../modules/context';

const searchResult = ({ Result, handleSearch }) => {
  const { apiUrl } = useThem();
  const showStore = () =>
    Result?.map((item) => {
      const showItem = () =>
        // eslint-disable-next-line array-callback-return
        item.BusinessItem?.map((items, index) => {
          if (index > 2) {
            /* empty */
          } else {
            return (
              <li className="rounded-full  bg-secondary px-2 py-1 text-center  text-white">
                {items.ItemName}
              </li>
            );
          }
          // eslint-disable-next-line consistent-return
        });
      const handleLike = () => {
        const Authorization = localStorage.getItem('BonnieYork') || '';

        const config = {
          method: item.IsFavorite === 'No' ? 'post' : 'delete',
          url: `${apiUrl}/customer/${
            item.IsFavorite === 'No' ? 'addmyfavorite' : 'cancelmyfavorite'
          }`,
          headers: {
            Authorization,
          },
          data: { storeId: item.Id },
        };
        axios(config)
          .then(() => {
            handleSearch();
          })
          .catch(() => {});
      };
      return (
        <li className="mb-4 w-full rounded-card shadow-md md:w-[32%]">
          <div className=" mb-4 rounded-t-card">
            <StoreSwiper photo={item?.BannerPath} />
          </div>
          <div className="px-5">
            <div className="mb-4 flex justify-between pt-2">
              <h2 className="text-xl text-secondary">{item.StoreName}</h2>
              <button onClick={handleLike}>
                {item.IsFavorite === 'No' ? (
                  <FavoriteBorderOutlinedIcon />
                ) : (
                  <FavoriteIcon sx={{ color: '#FF6347' }} />
                )}
              </button>
            </div>
            <div className="h-20">
              <ul className="h-5- mb-2 flex flex-wrap gap-2">
                {showItem()} <li>...</li>
              </ul>
            </div>
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
      <ul className="flex flex-wrap  gap-3">{showStore()}</ul>
    </div>
  );
};

export default searchResult;
