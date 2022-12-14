/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { useThem } from '../modules/context';

const calendarOverview = ({
  setAddOffDay,
  setAddReserve,
  setEditOder,
  allReserve,
  setOrderId,
}) => {
  const { data } = useThem();

  const handleClick = (e) => {
    if (data.status === 'staff') {
      return;
    }
    setOrderId(e.event.id);
    setEditOder(true);
  };
  return (
    <div>
      <div className="mb-4 flex justify-end">
        {data.status === 'store' && (
          <button
            className="h-10 w-40 rounded-lg bg-secondary text-white"
            onClick={() => setAddOffDay(true)}
          >
            新增休息日
          </button>
        )}
      </div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
        initialView="listWeek"
        selectable
        locale="zh-TW"
        headerToolbar={{
          left: 'title',
        }}
        eventClick={handleClick}
        events={allReserve}
      />
      <div className="mt-4 flex justify-end">
        <button
          className="h-10 w-40 rounded-lg bg-secondary text-white"
          onClick={() => setAddReserve(true)}
        >
          手動新增行事曆
        </button>
      </div>
    </div>
  );
};

export default calendarOverview;
