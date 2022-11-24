import React, { useState } from 'react';

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
  const { data, setData } = useThem();
  return (
    <Layout title="我的行事曆">
      {addBOffDay && <AddOffDay setAddOffDay={setAddOffDay} />}
      {addReserve && <AddReserve setAddReserve={setAddReserve} />}
      {editOder && <EditOder setEditOder={setEditOder} />}
      <div className="md:w-12/12 mx-auto w-11/12  pt-10 lg:w-10/12">
        <h2 className="mb-4 text-center text-4xl">行事曆</h2>

        <div>
          {data.status === 'store' && (
            <StoreCalendar
              setAddOffDay={setAddOffDay}
              setAddReserve={setAddReserve}
              setEditOder={setEditOder}
            />
          )}
          {data.status === 'staff' && (
            <StaffCalendar
              setAddOffDay={setAddOffDay}
              setAddReserve={setAddReserve}
              setEditOder={setEditOder}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default calendar;
