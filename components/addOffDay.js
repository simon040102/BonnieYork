import React from 'react'
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const addOffDay = (props) => {
    const {setAddOffDay}=props
     const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="fixed  z-10 h-full  overflow-y-auto top-0 w-full flex justify-center bg-black/50">
      <div
        data-aos="zoom-in"
        className="relative w-96 h-fit mt-20  bg-white border border-black py-8 items-center"
      >
        
        <h2 className="text-center mb-4">請選擇日期</h2>
        <div className="flex justify-center gap-3 mb-4">
          <div>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showMonthDropdown
              useShortMonthInDropdown
              dateFormat="yyyy/MM/dd"
              className="border text-center"
            />
          </div>
          <button>
            <AddCircleOutlineIcon />
          </button>
        </div>
        <ul className="w-full m-auto mb-5">
          <li className="flex justify-center gap-3 items-center mb-2">
            <p>2022/11/18</p>
            <button>
              <DeleteOutlineIcon sx={{ fontSize: 20 }} />
            </button>
          </li>
          <li className="flex justify-center gap-3 items-center mb-2">
            <p>2022/11/27</p>
            <button>
              <DeleteOutlineIcon sx={{ fontSize: 20 }} />
            </button>
          </li>
        </ul>
        <div className="flex justify-center gap-3 ">
          <button
            className="bg-gray-400  w-20 h-10"
            onClick={() => {
              setAddOffDay(false);
            }}
          >
            設定完成
          </button>
        </div>
      </div>
    </div>
  );
}

export default addOffDay