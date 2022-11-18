import React from 'react'
import CalendarOverview from './calendarOverview';
import StaffCalenderOverview from './staffCalenderOverview';
import { useState } from 'react';
const staffCalendar = (props) => {
 const { setAddOffDay, setAddReserve, setEditOder, status } = props;
    const [page, setPage] = useState('staffCalenderOverview');
  return (
    <div>
      <div className="flex justify-center mb-4">
        <button
          className={` ${
            page == 'staffCalenderOverview' ? 'text-black' : 'text-gray-500'
          } mx-8`}
          onClick={() => setPage('staffCalenderOverview')}
        >
          我的行事曆
        </button>
        <button
          className={` ${
            page == 'overview' ? 'text-black' : 'text-gray-500'
          } mx-8`}
          onClick={() => setPage('overview')}
        >
          店鋪總覽
        </button>
      </div>
      {page == 'overview' && (
        <CalendarOverview
          setAddOffDay={setAddOffDay}
          setAddReserve={setAddReserve}
          setEditOder={setEditOder}
        />
      )}
      {page == 'staffCalenderOverview' && (
        <StaffCalenderOverview setEditOder={setEditOder} status={status} />
      )}
    </div>
  );
}

export default staffCalendar