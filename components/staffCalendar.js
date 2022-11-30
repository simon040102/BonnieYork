/* eslint-disable react/button-has-type */
import { useState } from 'react';

import CalendarOverview from './calendarOverview';
import StaffCalenderOverview from './staffCalenderOverview';

const staffCalendar = ({ setAddOffDay, setAddReserve, setEditOder }) => {
  const [page, setPage] = useState('staffCalenderOverview');
  return (
    <div>
      <div className="mb-4 flex justify-center">
        <button
          className={` ${
            page === 'staffCalenderOverview' ? 'text-black' : 'text-gray-500'
          } mx-8`}
          onClick={() => setPage('staffCalenderOverview')}
        >
          我的行事曆
        </button>
        <button
          className={` ${
            page === 'overview' ? 'text-black' : 'text-gray-500'
          } mx-8`}
          onClick={() => setPage('overview')}
        >
          店鋪總覽
        </button>
      </div>
      {page === 'overview' && (
        <CalendarOverview
          setAddOffDay={setAddOffDay}
          setAddReserve={setAddReserve}
          setEditOder={setEditOder}
        />
      )}
      {page === 'staffCalenderOverview' && (
        <StaffCalenderOverview setEditOder={setEditOder} />
      )}
    </div>
  );
};

export default staffCalendar;
