/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useThem } from '../modules/context';
import 'react-toastify/dist/ReactToastify.css';

const addItem = ({ setAddItem }) => {
  const [itemInf, setItemInf] = useState({});
  const [itemImage, setItemImage] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  const Authorization = localStorage.getItem('BonnieYork');
  const { apiUrl, setLoading } = useThem();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItemInf((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const ChangeImage = async (e) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setImagePreview(reader.result);
    });
    reader.readAsDataURL(e.target.files[0]);
    const formData = new FormData();
    formData.append('ItemsImage', e.target.files[0]);
    setItemImage(formData);
  };

  const handleSubmit = () => {
    setLoading(true);
    const config = {
      method: 'post',
      url: `${apiUrl}/store/additems`,
      headers: {
        Authorization,
      },
      data: itemInf,
    };
    axios(config)
      .then(async (res) => {
        console.log(res);
        const id = await res.data.TheItemId;
        if (!imagePreview) {
          setLoading(false);
          setAddItem(false);
          toast.success('新增成功', {
            position: 'top-center',
            autoClose: 1000,
          });
          setTimeout(() => {
            router.reload(window.location.pathname);
          }, 1500);
        }
        if (imagePreview !== null) {
          const updateImage = {
            method: 'post',
            url: `${apiUrl}/store/UploadItemsImage?theItemId=${id}`,
            headers: {
              Authorization,
            },
            data: itemImage,
          };
          axios(updateImage)
            .then((response) => {
              console.log(response);
              setLoading(false);
              setAddItem(false);
              toast.success('新增成功', {
                position: 'top-center',
                autoClose: 1000,
              });
              setTimeout(() => {
                router.reload(window.location.pathname);
              }, 1500);
            })
            .catch((err) => {
              console.log(err);
              setLoading(false);
            });
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error(`${err.response.data.Message}`, {
          position: 'top-center',
          autoClose: 1000,
        });
      });
  };

  console.log(itemInf);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="fixed  top-4 z-10  flex h-full w-full justify-center overflow-y-auto bg-black/50">
      <div
        data-aos="zoom-in"
        className="relative mt-20  h-fit w-96  rounded-lg  bg-white"
      >
        <div className="relative mb-8 flex h-60 w-full items-center justify-center rounded-t-lg bg-footerL">
          <label
            htmlFor="itemImage"
            className="absolute top-0 left-0 right-0 bottom-0 "
          >
            <img
              src={imagePreview}
              alt=""
              className="aspect-auto rounded-t-lg object-fill"
            />
            <p
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform ${
                imagePreview && 'hidden'
              }`}
            >
              點選新增照片
            </p>
          </label>
          <input
            type="file"
            id="itemImage"
            accept="image/png, image/jpeg"
            className="hidden"
            onChange={ChangeImage}
          />
        </div>
        <div className="p-5">
          <div className="relative">
            <p className="absolute -top-2.5 left-4 bg-white px-2 text-input">
              *項目名稱
            </p>
            <input
              name="ItemName"
              value={itemInf.ItemName}
              type="text"
              className="mb-6 mr-2 h-10 w-full rounded-lg border border-input text-center"
              onChange={handleChange}
            />
          </div>
          <div className="relative">
            <p className="absolute -top-2.5 left-4 bg-white px-2 text-input">
              *時間
            </p>
            <select
              name="SpendTime"
              id=""
              value={itemInf.SpendTime}
              onChange={handleChange}
              className="mb-6 mr-2 h-10 w-full rounded-lg border border-input text-center"
            >
              <option value="">請選擇項目時間</option>
              <option value="30分鐘">30分鐘</option>
              <option value="1小時">1小時</option>
              <option value="1.5小時">1小時30分鐘</option>
              <option value="2小時">2小時</option>
              <option value="2小時30分鐘">2小時30分鐘</option>
              <option value="3小時">3小時</option>
              <option value="3小時30分鐘">3小時30分鐘</option>
              <option value="4小時">4小時</option>
            </select>
          </div>
          <div className="relative">
            <p className="absolute -top-2.5 left-4 bg-white px-2 text-input">
              *金額
            </p>
            <input
              name="Price"
              value={itemInf.Price}
              type="text"
              className="mb-6 mr-2 h-10 w-full rounded-lg border border-input text-center"
              onChange={handleChange}
            />
          </div>
          <div className="relative">
            <p className="absolute -top-2.5 left-4 bg-white px-2 text-input">
              描述
            </p>
            <textarea
              name="Describe"
              id=""
              cols="10"
              rows="5"
              value={itemInf.Describe}
              onChange={handleChange}
              className="mb-6 mr-2 w-full resize-none rounded-lg border border-input p-4"
            />
          </div>
          <div className="relative">
            <p className="absolute -top-2.5 left-4 bg-white px-2 text-input">
              備註：
            </p>
            <input
              type="text"
              name="Remark"
              value={itemInf.Remark}
              onChange={handleChange}
              className="mb-6 mr-2 h-10 w-full rounded-lg border border-input text-center"
            />
          </div>
          <div className="flex justify-around">
            <button
              className="h-12 w-32 rounded-lg bg-footerL text-secondary"
              onClick={() => setAddItem(false)}
            >
              取消
            </button>
            <button
              className="h-12 w-32 rounded-lg bg-secondary text-white"
              onClick={handleSubmit}
            >
              新增項目
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default addItem;
