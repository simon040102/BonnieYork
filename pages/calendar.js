import React, { useState } from 'react'
import Layout from '../modules/layout'
import Head from 'next/head';
import StoreCalendar from '../components/storeCalendar'
import StaffCalendar from '../components/staffCalendar'
import AddOffDay from '../components/addOffDay';
import AddReserve from '../components/addReserve';

const calendar = () => {
  const [status,setStatus]=useState('store')
      const [addBOffDay, setAddOffDay] = useState(false);
      const [addReserve,setAddReserve]=useState(false)
  return (
    <div>
      <Head>
        <title>我的行事曆</title>
      </Head>
      <Layout>
        {addBOffDay && <AddOffDay setAddOffDay={setAddOffDay} />}
        {addReserve && <AddReserve setAddReserve={setAddReserve} />}
        <div className="w-11/12 md:w-12/12 lg:w-10/12  mx-auto pt-10">
          <h2 className="text-center text-4xl mb-4">行事曆</h2>

          <div>
            {status == 'store' && (
              <StoreCalendar
                setAddOffDay={setAddOffDay}
                setAddReserve={setAddReserve}
              />
            )}
            {status == 'staff' && <StaffCalendar />}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default calendar