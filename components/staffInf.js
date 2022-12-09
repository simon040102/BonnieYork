import { useThem } from '../modules/context';

const staffInf = ({ inf, handleChange }) => {
  const { data } = useThem();
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="relative">
          <p className="absolute -top-2.5 left-4 bg-white px-2 text-black">
            Email
          </p>
          <input
            type="text"
            name="Account"
            value={inf.Account}
            disabled
            className="mb-6 h-12 w-full rounded-lg border border-black indent-3"
            onChange={handleChange}
          />
        </div>
        <div className="relative">
          <p className="absolute -top-2.5 left-4 bg-white px-2 text-black">
            所屬店家
          </p>
          <input
            type="text"
            name="StoreName"
            value={data.StoreName}
            disabled
            className="mb-6 h-12 w-full rounded-lg border border-black indent-3"
            onChange={handleChange}
          />
        </div>
        <div className="relative">
          <p className="absolute -top-2.5 left-4 bg-white px-2 text-black">
            *名稱(暱稱)
          </p>
          <input
            name="StaffName"
            value={inf.StaffName}
            type="text"
            className="mb-6 h-12 w-full rounded-lg border border-black indent-3"
            onChange={handleChange}
          />
        </div>
        <div className="relative">
          <p className="absolute -top-2.5 left-4 bg-white px-2 text-black">
            *手機號碼
          </p>
          <input
            type="text"
            name="CellphoneNumber"
            value={inf.CellphoneNumber}
            className="mb-6 h-12 w-full rounded-lg border border-black indent-3"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default staffInf;
