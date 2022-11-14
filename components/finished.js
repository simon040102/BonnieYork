import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';

const finished = () => {
  return (
    <div className="">
      <ul className="w-full">
        <li className="border-b border-black  mb-6 p-5">
          <div className="flex justify-between">
            <h3 className="text-2xl mb-2">xxxHairSalon</h3>
            <button className="bg-gray-400 w-32 h-8">再次預約</button>
          </div>
          <div className="flex gap-3 mb-2">
            <CalendarMonthIcon />
            <p>2022/10/31 10:00</p>
          </div>
          <div className="flex gap-3 mb-2">
            <LocationOnIcon />
            <p>台北市大安區信義路123號</p>
          </div>
          <p className="mb-2">設計師：粉紅可愛豬</p>
          <div className="flex justify-between text-xl">
            <div className="flex gap-2">
              <EventNoteIcon sx={{ fontSize: 30 }} />
              <p>男士剪髮</p>
            </div>
            <div className="flex justify-between text-xl">
              <div className="flex gap-2">
                <AccessTimeIcon sx={{ fontSize: 30 }} />
                <p>1小時</p>
              </div>
            </div>
            <div className="flex justify-between text-xl">
              <div className="flex gap-2">
                <PaidOutlinedIcon sx={{ fontSize: 30 }} />
                <p>1200</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default finished;
