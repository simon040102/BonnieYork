/* eslint-disable no-useless-escape */
/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // needed
import listPlugin from '@fullcalendar/list'; // For List View
import timeGridPlugin from '@fullcalendar/timegrid';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useThem } from '../modules/context';

const staffCalenderOverview = ({ setEditOder, setAddOffDay, setOrderId }) => {
  const { data, apiUrl, setLoading } = useThem();
  const [staff, setStaff] = useState([]);
  const [event, setEvent] = useState([]);
  const [storeInformation, setStoreInformation] = useState({});
  const handleClick = (e) => {
    if (!e.event.id) {
      return;
    }
    setEditOder(true);
    setOrderId(e.event.id);
  };

  const showStaff = () =>
    staff?.map((item) => <option value={item.Id}>{item.StaffName}</option>);

  const handleChange = (e) => {
    setLoading(true);
    const { value } = e.target;
    const Authorization = localStorage.getItem('BonnieYork');
    const config = {
      method: 'get',
      url: `${apiUrl}/store/staffcalendar?staffId=${value}`,
      headers: {
        Authorization,
      },
    };
    axios(config)
      .then(async (res) => {
        setLoading(false);
        const response = await res.data.calendar;
        setStoreInformation(res.data.holidayInformation[0]);
        const { HolidayDate, StaffDaysOff } = res.data.holidayInformation[0];
        const Reserve = [];
        response.forEach((item) => {
          const task = {
            id: item.ReserveId,
            title: `${item.StaffName}/ ${item.CustomerName}  ${item.ItemName}`,
            start: new Date(`${item.ReserveDate} ${item.ReserveStart}`),
            end: new Date(`${item.ReserveDate} ${item.ReserveEnd}`),
            backgroundColor: `${item.ReserveState === 'Done' && '#bdbdbd'}`,
          };
          Reserve.push(task);
        });
        HolidayDate.split(',').forEach((item) => {
          const task = {
            title: `公休日`,
            date: item.replace(/[\ |\/|\?]/g, '-'),
            backgroundColor: '#ef4565',
          };
          Reserve.push(task);
        });
        StaffDaysOff.split(',').forEach((item) => {
          const task = {
            title: `休假`,
            date: item.replace(/[\ |\/|\?]/g, '-'),
            backgroundColor: '#bdbdbd',
          };
          Reserve.push(task);
        });
        setEvent(Reserve);
      })
      .catch(() => {});
  };

  useEffect(() => {
    const Authorization = localStorage.getItem('BonnieYork');

    if (data.status === 'store') {
      setLoading(true);
      const config = {
        method: 'get',
        url: `${apiUrl}/store/allstaff`,
        headers: {
          Authorization,
        },
      };
      axios(config)
        .then((res) => {
          setLoading(false);
          setStaff(res.data.AllStaffItem);
        })
        .catch(() => {});
    }
    if (data.status === 'staff') {
      const config = {
        method: 'get',
        url: `${apiUrl}/staff/Calendar`,
        headers: {
          Authorization,
        },
      };
      axios(config)
        .then((res) => {
          setLoading(false);
          const response = res.data.calendar;
          setStoreInformation(res.data.holidayInformation[0]);
          const { HolidayDate, StaffDaysOff } = res.data.holidayInformation[0];
          const Reserve = [];
          response.forEach((item) => {
            const task = {
              id: item.ReserveId,
              title: `${item.StaffName}/ ${item.CustomerName}  ${item.ItemName}`,
              start: new Date(`${item.ReserveDate} ${item.ReserveStart}`),
              end: new Date(`${item.ReserveDate} ${item.ReserveEnd}`),
              backgroundColor: `${item.ReserveState === 'Done' && '#bdbdbd'}`,
            };
            Reserve.push(task);
          });
          HolidayDate.split(',').forEach((item) => {
            const task = {
              title: `公休日`,
              date: item.replace(/[\ |\/|\?]/g, '-'),
              backgroundColor: '#ef4565',
            };
            Reserve.push(task);
          });
          StaffDaysOff.split(',').forEach((item) => {
            const task = {
              title: `休假`,
              date: item.replace(/[\ |\/|\?]/g, '-'),
              backgroundColor: '#bdbdbd',
            };
            Reserve.push(task);
          });
          setEvent(Reserve);
        })
        .catch(() => {});
    }
  }, [data]);

  return (
    <div>
      {data?.status === 'store' && (
        <>
          <div className="mx-auto w-11/12  md:w-8/12 lg:w-6/12">
            <select
              name=""
              id=""
              className="mb-8 h-10 w-full rounded-lg border border-unSelect text-center"
              onChange={handleChange}
            >
              <option value="">請選擇員工</option>
              {showStaff()}
            </select>
          </div>
          {event.length !== 0 ? (
            <>
              <div className=" text-xl text-red">
                固定公休日：{storeInformation.PublicHoliday}
              </div>
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
                  expandRows
                  headerToolbar={{
                    left: 'title',
                  }}
                  slotMinTime={
                    storeInformation.WeekdayStartTime.replace(':', '') <=
                    storeInformation.HolidayStartTime.replace(':', '')
                      ? storeInformation.WeekdayStartTime
                      : storeInformation.HolidayStartTime
                  }
                  slotMaxTime={
                    storeInformation.WeekdayEndTime.replace(':', '') >=
                    storeInformation.HolidayEndTime.replace(':', '')
                      ? storeInformation.WeekdayEndTime
                      : storeInformation.HolidayEndTime
                  }
                  firstDay="1"
                  eventClick={handleClick}
                  events={event}
                />
              </div>
            </>
          ) : (
            <div className="mt-20 text-center text-3xl text-unSelect">
              請選擇員工
            </div>
          )}
        </>
      )}
      {data?.status === 'staff' && (
        <div>
          <div className="mb-4 flex justify-end">
            <button
              className="h-10 w-40 rounded-lg bg-secondary text-white"
              onClick={() => setAddOffDay(true)}
            >
              新增休息日
            </button>
          </div>
          <div className=" text-xl text-red">
            固定公休日：{storeInformation.PublicHoliday}
          </div>
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
              expandRows
              headerToolbar={{
                left: 'title',
              }}
              slotMinTime="07:00"
              slotMaxTime="22:00"
              firstDay="1"
              eventClick={handleClick}
              events={event}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default staffCalenderOverview;
