/* eslint-disable no-useless-escape */
/* eslint-disable react/button-has-type */

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';

const finished = ({ array }) => {
  const showReserve = () =>
    array?.map((item) => {
      const startTime = new Date(`${item.ReserveDate} ${item.ReserveStart}`)
        .toISOString()
        .replace(/[\ |\.|\|\-|\\|\:|\?]/g, '');
      const endTime = new Date(`${item.ReserveDate} ${item.ReserveEnd}`)
        .toISOString()
        .replace(/[\ |\.|\|\-|\\|\:|\?]/g, '');
      console.log(startTime, endTime);
      return (
        <li className="mb-6 rounded-lg bg-white p-5 shadow-lg">
          <div className="flex gap-3">
            <h3 className="mb-2 text-2xl font-bold text-secondary">
              {item?.StoreInformation[0].StoreName}
            </h3>
            <p className="mb-4">
              {item?.StoreInformation[0].StaffTitle}：{item.StaffName}
            </p>
            {/* <Link
              href={googleUrl}
              className="h-8 w-32 rounded-lg bg-secondary text-white"
            >
              <a
                target="_blank"
                className="w-32 rounded-lg bg-secondary py-2 text-center text-white"
              >
                Google行事曆
              </a>
            </Link> */}
          </div>
          <div className="mb-4 flex gap-3">
            <CalendarMonthIcon />
            <p>
              {item.ReserveDate} {item.ReserveStart}
            </p>
          </div>
          <div className="mb-4 flex gap-3">
            <LocationOnIcon />
            <p> {item?.StoreInformation[0].Address}</p>
          </div>

          <div className="flex justify-between text-xl">
            <div className="flex gap-2">
              <EventNoteIcon sx={{ fontSize: 30, color: '#00659F' }} />
              <p className="text-secondary">{item.ItemName}</p>
            </div>
            <div className="flex gap-3">
              <div className="flex justify-between text-xl">
                <div className="flex gap-2">
                  <AccessTimeIcon sx={{ fontSize: 30, color: '#00659F' }} />
                  <p className="text-secondary">{item.SpendTime}</p>
                </div>
              </div>
              <div className="flex justify-between text-xl">
                <div className="flex gap-2">
                  <PaidOutlinedIcon sx={{ fontSize: 30, color: '#00659F' }} />
                  <p className="text-secondary">{item.Price}</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      );
    });
  return (
    <div className="">
      <ul className="w-full">{showReserve()}</ul>
    </div>
  );
};

export default finished;
