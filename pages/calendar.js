/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import axios from 'axios';

import { ToastContainer } from 'react-toastify';
import Layout from '../modules/layout';
import { useThem } from '../modules/context';
import StoreCalendar from '../components/storeCalendar';
import StaffCalendar from '../components/staffCalendar';
import AddOffDay from '../components/addOffDay';
import AddReserve from '../components/addReserve';
import EditOder from '../components/editOder';

const calendar = () => {
  const [addBOffDay, setAddOffDay] = useState(false);
  const [addReserve, setAddReserve] = useState(false);
  const [editOder, setEditOder] = useState(false);
  const [orderID, setOrderId] = useState('');
  const [allReserve, setAllReserve] = useState([]);
  const { data, setLoading, apiUrl } = useThem();

  useEffect(() => {
    const Authorization = localStorage.getItem('BonnieYork');
    setLoading(true);
    const config = {
      method: 'get',
      url: `${apiUrl}/store/calendar`,
      headers: {
        Authorization,
      },
    };
    axios(config)
      .then((res) => {
        console.log(res);
        const response = res.data;
        console.log(res.data);
        const Reserve = [];
        response.forEach((item) => {
          const task = {
            id: item.ReserveId,
            title: `${item.StaffName}/ ${item.CustomerName}  ${item.ItemName} ${
              item.ReserveState === 'Undone' ? '未完成' : ''
            }`,
            start: new Date(`${item.ReserveDate} ${item.ReserveStart}`),

            end: new Date(`${item.ReserveDate} ${item.ReserveEnd}`),
          };
          Reserve.push(task);
        });
        setLoading(false);
        setAllReserve(Reserve);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Layout title="我的行事曆">
      {addBOffDay && <AddOffDay setAddOffDay={setAddOffDay} />}
      {addReserve && <AddReserve setAddReserve={setAddReserve} />}
      {editOder && <EditOder setEditOder={setEditOder} orderID={orderID} />}
      <div className="md:w-12/12 mx-auto w-11/12  pt-20 lg:w-10/12">
        <h2 className="mb-4 text-center text-4xl font-bold">行事曆</h2>

        <div>
          {data.status === 'store' && (
            <StoreCalendar
              setAddOffDay={setAddOffDay}
              setAddReserve={setAddReserve}
              setEditOder={setEditOder}
              allReserve={allReserve}
              setOrderId={setOrderId}
            />
          )}
          {data.status === 'staff' && (
            <StaffCalendar
              setAddOffDay={setAddOffDay}
              setAddReserve={setAddReserve}
              setEditOder={setEditOder}
              allReserve={allReserve}
              setOrderId={setOrderId}
            />
          )}
        </div>
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default calendar;
