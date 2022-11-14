import React, { useState } from 'react'
import CalendarOverview from './calendarOverview';
import StaffCalenderOverview from './staffCalenderOverview';
const storeCalendar = (props) => {
    const { setAddOffDay, setAddReserve } = props;
    const [page, setPage] = useState('overview');
  return (
    <div>
      <div className="flex justify-center mb-4">
        <button
          className={` ${
            page == 'overview' ? 'text-black' : 'text-gray-500'
          } mx-8`}
          onClick={() => setPage('overview')}
        >
          店鋪總覽
        </button>
        <button
          className={` ${
            page == 'staffCalenderOverview' ? 'text-black' : 'text-gray-500'
          } mx-8`}
          onClick={() => setPage('staffCalenderOverview')}
        >
          員工行事曆
        </button>
      </div>
      {page == 'overview' && (
        <CalendarOverview
          setAddOffDay={setAddOffDay}
          setAddReserve={setAddReserve}
        />
      )}
      {page == 'staffCalenderOverview' && <StaffCalenderOverview />}
    </div>
  );
}

export default storeCalendar