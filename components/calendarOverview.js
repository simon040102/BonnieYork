/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

const calendarOverview = ({ setAddOffDay, setAddReserve, setEditOder }) => {
  const handleClick = (e) => {
    console.log(e.event.id);
    setEditOder(true);
  };
  return (
    <div>
      <div className="mb-4 flex justify-end">
        <button
          className="h-10 w-40 rounded-lg bg-secondary text-white"
          onClick={() => setAddOffDay(true)}
        >
          新增休息日
        </button>
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
        events={[
          {
            title: '粉紅可愛豬 / 王大明 剪髮',
            id: '123',
            start: new Date('2022/11/13 9:30'),
            end: new Date('2022/10/23 10:30'),
            editable: true,
          },
          {
            title: '朵拉呆瓜頭 / 陳安娜 剪髮',
            start: new Date('2022/11/13 10:00'),
            end: new Date('2022/11/13 11:00'),
            id: '42132132',
          },
          {
            title: '遜風快剪手 / 黃大頭 燙髮',
            start: new Date('2022/11/13 10:00'),
            end: new Date('2022/11/13 11:30'),
          },
          {
            title: '粉紅可愛豬 / 孫悟空 染髮',
            start: new Date('2022/11/14 12:00'),
            end: new Date('2022/11/14 13:00'),
          },
          {
            title: '巴斯光年 / 沙悟淨 剪髮',
            start: new Date('2022/11/15 13:00'),
            end: new Date('2022/11/15 14:00'),
          },
          {
            title: '胡迪 / 葉大雄 燙髮 ',
            start: new Date('2022/11/16 12:00'),
            end: new Date('2022/11/16 13:30'),
          },
          {
            title: '桃地再不斬 / 靜香 燙髮',
            start: new Date('2022/11/17 10:00'),
            end: new Date('2022/11/13 11:30'),
          },
          {
            title: '猿飛阿斯瑪 / 靜香 燙髮',
            start: new Date('2022/11/19 10:00'),
            end: new Date('2022/11/19 11:30'),
          },
        ]}
      />
      <div className="mt-4 flex justify-end">
        <button
          className="bg-gray-400 h-10 w-40 text-white"
          onClick={() => setAddReserve(true)}
        >
          手動新增行事曆
        </button>
      </div>
    </div>
  );
};

export default calendarOverview;
