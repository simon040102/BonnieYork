/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable arrow-body-style */
/* eslint-disable react/button-has-type */
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import Link from 'next/link';

const reserved = ({ array }) => {
  const showReserve = () => {
    return array?.map((item) => {
      const startTime = new Date(`${item.ReserveDate} ${item.ReserveStart}`)
        .toISOString()
        .replace(/[\ |\.|\|\-|\\|\:|\?]/g, '');
      const endTime = new Date(`${item.ReserveDate} ${item.ReserveEnd}`)
        .toISOString()
        .replace(/[\ |\.|\|\-|\\|\:|\?]/g, '');
      const googleUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?text=${item?.StoreInformation[0].StoreName} ${item.ItemName}&dates=${startTime}/${endTime}&location=${item.StoreInformation[0].Address}`;

      return (
        <li className="mb-6 rounded-lg bg-white p-5 shadow-lg">
          <div className="flex justify-between">
            <div>
              <Link href={`/store/${item.StoreId}`}>
                <a className="text-2xl font-bold text-secondary hover:underline">
                  {item?.StoreInformation[0].StoreName}
                </a>
              </Link>

              <p className="mb-4">
                {item?.StoreInformation[0].StaffTitle}：{item.StaffName}
              </p>
            </div>
            <Link
              href={googleUrl}
              className="h-8 w-32 rounded-lg bg-secondary text-white"
            >
              <a
                target="_blank"
                className="h-10 w-32 rounded-lg bg-secondary py-2 text-center text-white"
              >
                Google行事曆
              </a>
            </Link>
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
  };

  return (
    <div className="">
      <ul className="w-full">{showReserve()}</ul>
    </div>
  );
};

export default reserved;
