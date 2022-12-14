/* eslint-disable react/button-has-type */
import { useState } from 'react';
import CalendarOverview from './calendarOverview';
import StaffCalenderOverview from './staffCalenderOverview';

const storeCalendar = ({
  setAddOffDay,
  setAddReserve,
  setEditOder,
  allReserve,
  setOrderId,
}) => {
  const [page, setPage] = useState('overview');
  return (
    <div>
      <div className="mb-4 flex justify-center">
        <button
          className={` ${
            page === 'overview' ? 'border-b-2 text-secondary' : ' text-unSelect'
          } mx-8`}
          onClick={() => setPage('overview')}
        >
          店鋪總覽
        </button>
        <button
          className={` ${
            page === 'staffCalenderOverview'
              ? 'border-b-2 text-secondary'
              : ' text-unSelect'
          } mx-8`}
          onClick={() => setPage('staffCalenderOverview')}
        >
          員工行事曆
        </button>
      </div>
      {page === 'overview' && (
        <CalendarOverview
          setAddOffDay={setAddOffDay}
          setAddReserve={setAddReserve}
          setEditOder={setEditOder}
          allReserve={allReserve}
          setOrderId={setOrderId}
        />
      )}
      {page === 'staffCalenderOverview' && (
        <StaffCalenderOverview
          setEditOder={setEditOder}
          setOrderId={setOrderId}
        />
      )}
    </div>
  );
};

export default storeCalendar;
