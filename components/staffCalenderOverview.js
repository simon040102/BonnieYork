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
  const handleClick = (e) => {
    console.log(e.event.id);
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
        const response = res.data;
        console.log(response);
        const Reserve = [];
        response.forEach((item) => {
          const task = {
            id: item.ReserveId,
            title: `${item.StaffName}/ ${item.CustomerName}  ${item.ItemName}`,
            start: new Date(`${item.ReserveDate} ${item.ReserveStart}`),
            end: new Date(`${item.ReserveDate} ${item.ReserveEnd}`),
          };
          Reserve.push(task);
        });
        setEvent(Reserve);
      })
      .catch((err) => {
        console.log(err);
      });
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
          console.log(res);
          setStaff(res.data.AllStaffItem);
        })
        .catch((err) => {
          console.log(err);
        });
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
          const response = res.data;
          console.log(response);
          const Reserve = [];
          response.forEach((item) => {
            const task = {
              id: item.ReserveId,
              title: `${item.StaffName}/ ${item.CustomerName}  ${item.ItemName}`,
              start: new Date(`${item.ReserveDate} ${item.ReserveStart}`),
              end: new Date(`${item.ReserveDate} ${item.ReserveEnd}`),
            };
            Reserve.push(task);
          });
          setEvent(Reserve);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [data]);
  return (
    <div>
      {data?.status === 'store' && (
        <div className="mx-auto w-11/12  md:w-8/12 lg:w-6/12">
          <select
            name=""
            id=""
            className="mb-8 w-full rounded-lg border border-unSelect text-center"
            onChange={handleChange}
          >
            <option value="">請選擇員工</option>
            {showStaff()}
          </select>
        </div>
      )}
      {data?.status === 'staff' && (
        <div className="mb-4 flex justify-end">
          <button
            className="h-10 w-40 rounded-lg bg-secondary text-white"
            onClick={() => setAddOffDay(true)}
          >
            新增休息日
          </button>
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
          slotMinTime="08:00"
          slotMaxTime="22:00"
          firstDay="1"
          eventClick={handleClick}
          events={event}
        />
      </div>
    </div>
  );
};

export default staffCalenderOverview;
