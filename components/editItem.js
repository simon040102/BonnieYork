/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useThem } from '../modules/context';

const editItem = ({ setEdit, setAddItem, setEditItem }) => {
  const Authorization = localStorage.getItem('BonnieYork');
  const [allItem, setAllItem] = useState([]);
  const { apiUrl, setLoading } = useThem();
  console.log(allItem);

  const showItem = () => {
    try {
      return allItem.map((item, index) => (
        <li
          key={index}
          className="w-ful mb-6 flex h-52 rounded-lg border-2 border-unSelect bg-white shadow-lg"
        >
          <img
            src={item?.PicturePath}
            className="w-2/5 rounded-l-lg object-cover"
          />
          <div className="relative w-3/5 p-4">
            <div className="mb-4 flex items-center gap-3">
              <h2 className="font-bold ">{item.ItemName}</h2>
              <div className="flex gap-1 text-sm ">
                <AccessTimeOutlinedIcon sx={{ fontSize: 20 }} />
                <p>{item.SpendTime}</p>
              </div>
              <div className="flex gap-1 text-sm">
                <MonetizationOnOutlinedIcon sx={{ fontSize: 20 }} />
                <p>{item.Price}</p>
              </div>
            </div>
            <p className="mb-4">{item.Describe}</p>
            <button
              className="absolute bottom-2 right-4 h-8 w-32 rounded-lg bg-secondary text-white"
              onClick={() => {
                setEdit(true);
                setEditItem(item);
              }}
            >
              編輯
            </button>
          </div>
        </li>
      ));
    } catch (error) {
      /* empty */
    }
  };

  useEffect(() => {
    setLoading(true);
    const config = {
      method: 'get',
      url: `${apiUrl}/store/getallitems`,
      headers: {
        Authorization,
      },
    };
    axios(config)
      .then((res) => {
        console.log(res);
        setAllItem(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div className="w-full px-2 sm:w-3/4 md:px-0 lg:w-1/2">
      <ul>{showItem()}</ul>
      <div className="flex justify-center">
        <button onClick={() => setAddItem(true)}>
          <AddCircleOutlineIcon sx={{ color: '#00659F', fontSize: 40 }} />
        </button>
      </div>
    </div>
  );
};

export default editItem;
