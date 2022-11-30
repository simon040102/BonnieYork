/* eslint-disable no-console */
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // needed
import listPlugin from '@fullcalendar/list'; // For List View
import timeGridPlugin from '@fullcalendar/timegrid';

const staffCalenderOverview = ({ setEditOder, data }) => {
  const handleClick = (e) => {
    console.log(e.event.id);
    setEditOder(true);
  };
  return (
    <div>
      {data.status === 'store' && (
        <div className="mx-auto w-11/12 pt-10 md:w-8/12 lg:w-6/12">
          <select name="" id="" className="mb-8 w-full border text-center">
            <option value="可愛粉紅豬">可愛粉紅豬</option>
          </select>
        </div>
      )}

      <div>
        <FullCalendar
          plugins={[
            dayGridPlugin,
            interactionPlugin,
            listPlugin,
            timeGridPlugin,
          ]}
          initialView="timeGridWeek"
          selectable
          locale="zh-TW"
          headerToolbar={{
            left: 'title',
          }}
          slotMinTime="10:00"
          slotMaxTime="22:00"
          firstDay="1"
          eventClick={handleClick}
          events={[
            {
              title: '陳安娜 剪髮',
              start: new Date('2022/11/13 10:00'),
              end: new Date('2022/11/13 11:00'),
            },
            {
              title: '朱利安 燙髮',
              start: new Date('2022/11/13 11:00'),
              end: new Date('2022/11/13 13:00'),
            },
            {
              title: '微微安 染髮',
              start: new Date('2022/11/13 15:00'),
              end: new Date('2022/10/23 17:00'),
            },
            {
              title: '久安那 染髮',
              start: new Date('2022/11/14 12:00'),
              end: new Date('2022/11/14 14:00'),
            },
            {
              title: '朱弟 剪髮',
              start: new Date('2022/11/16 13:00'),
              end: new Date('2022/11/16 14:00'),
            },
            {
              title: '杰倫 剪髮',
              start: new Date('2022/11/16 16:00'),
              end: new Date('2022/11/16 17:00'),
            },
            {
              title: '韋禮安 燙髮',
              start: new Date('2022/11/17 15:00'),
              end: new Date('2022/11/17 17:00'),
            },
            {
              title: '漂亮阿姨 染髮',
              start: new Date('2022/11/17 17:00'),
              end: new Date('2022/11/17 19:00'),
            },
            {
              title: '豬八戒 染髮',
              start: new Date('2022/11/18 10:00'),
              end: new Date('2022/11/18 12:00'),
            },
            {
              title: '孫悟空 染髮',
              start: new Date('2022/11/18 14:00'),
              end: new Date('2022/11/18 16:00'),
            },
            {
              title: '綺綺 剪髮',
              start: new Date('2022/11/19 11:30'),
              end: new Date('2022/11/19 12:30'),
            },
            {
              title: '綺綺 燙髮',
              start: new Date('2022/11/19 17:30'),
              end: new Date('2022/11/19 19:30'),
            },
            {
              title: '公休 ',
              date: '2022-11-15',
              backgroundColor: '#ef4565',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default staffCalenderOverview;
