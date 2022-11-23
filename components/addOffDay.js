import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const addOffDay = (props) => {
  const { setAddOffDay } = props;
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="fixed  top-0 z-10  flex h-full w-full justify-center overflow-y-auto bg-black/50">
      <div
        data-aos="zoom-in"
        className="relative mt-20 h-fit w-96  items-center border border-black bg-white py-8"
      >
        <h2 className="mb-4 text-center">請選擇日期</h2>
        <div className="mb-4 flex justify-center gap-3">
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
        <ul className="m-auto mb-5 w-full">
          <li className="mb-2 flex items-center justify-center gap-3">
            <p>2022/11/18</p>
            <button>
              <DeleteOutlineIcon sx={{ fontSize: 20 }} />
            </button>
          </li>
          <li className="mb-2 flex items-center justify-center gap-3">
            <p>2022/11/27</p>
            <button>
              <DeleteOutlineIcon sx={{ fontSize: 20 }} />
            </button>
          </li>
        </ul>
        <div className="flex justify-center gap-3 ">
          <button
            className="bg-gray-400  h-10 w-20"
            onClick={() => setAddOffDay(false)}
          >
            設定完成
          </button>
        </div>
      </div>
    </div>
  );
};

export default addOffDay;
