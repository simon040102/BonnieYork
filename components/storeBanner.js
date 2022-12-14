/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const storeBanner = ({
  setSelectBanner,
  setPreviewBanner,
  previewBanner,
  selectBanner,
  Num,
  bannerPath,
}) => {
  const handleChange = async (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        // 預覽圖片
        // setBanner(reader.result);
        setPreviewBanner((prevState) => ({
          ...prevState,
          [`Banner${Num}`]: reader.result,
        }));
      });
      reader.readAsDataURL(e.target.files[0]);
      // 要上的檔案
      const formData = new FormData();
      formData.append([`Banner${Num}`], e.target.files[0]);
      setSelectBanner([...selectBanner, formData]);
    }
  };
  return (
    <div className="relative flex  h-24 w-32 rounded-lg bg-footerL text-white">
      <label
        htmlFor={`upload${Num}`}
        className=" flex h-24 w-full cursor-pointer rounded-lg "
      >
        <div>
          {bannerPath && (
            <img
              src={bannerPath}
              alt=""
              className={`aspect-auto h-24 rounded-lg object-fill ${
                previewBanner[`Banner${Num}`] && 'hidden'
              }`}
            />
          )}
          {previewBanner[`Banner${Num}`] ? (
            <img
              src={previewBanner[`Banner${Num}`]}
              alt=""
              className="aspect-auto h-24 rounded-lg object-fill"
            />
          ) : (
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform ${
                bannerPath && 'hidden'
              }`}
            >
              <AddCircleOutlineIcon sx={{ color: '#00659F', fontSize: 40 }} />
            </div>
          )}
        </div>
      </label>
      <input
        type="file"
        id={`upload${Num}`}
        accept="image/png, image/jpeg"
        className="hidden"
        onChange={handleChange}
      />
    </div>
  );
};

export default storeBanner;
