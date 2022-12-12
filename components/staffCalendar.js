/* eslint-disable react/button-has-type */
import { useState } from 'react';
import CalendarOverview from './calendarOverview';
import StaffCalenderOverview from './staffCalenderOverview';

const staffCalendar = ({
  setAddOffDay,
  setAddReserve,
  setEditOder,
  allReserve,
}) => {
  const [page, setPage] = useState('staffCalenderOverview');
  return (
    <div>
      <div className="mb-4 flex justify-center">
        <button
          className={` ${
            page === 'staffCalenderOverview'
              ? 'border-b-2 text-secondary'
              : ' text-unSelect'
          } mx-8`}
          onClick={() => setPage('staffCalenderOverview')}
        >
          我的行事曆
        </button>
        <button
          className={` ${
            page === 'overview' ? 'border-b-2 text-secondary' : ' text-unSelect'
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
          allReserve={allReserve}
        />
      )}
      {page === 'staffCalenderOverview' && (
        <StaffCalenderOverview
          setEditOder={setEditOder}
          setAddOffDay={setAddOffDay}
        />
      )}
    </div>
  );
};

export default staffCalendar;
