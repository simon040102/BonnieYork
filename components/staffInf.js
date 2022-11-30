const staffInf = ({ inf, handleChange }) => (
  <div className="w-full">
    <div className="w-full">
      <p className="mb-4 h-10">Email：xxx123@gmail.com</p>
      <p className="mb-4 h-10">所屬店家：第五分局按摩店</p>
      <div className="relative">
        <p className="absolute -top-2.5 left-4 bg-white px-2 text-black">
          *名稱(暱稱)
        </p>
        <input
          name="name"
          value={inf.name}
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
          name="phone"
          value={inf.phone}
          className="mb-6 h-12 w-full rounded-lg border border-black indent-3"
          onChange={handleChange}
        />
      </div>
    </div>
    <div className="mb-4 text-left">
      <p>性別：</p>
      <input
        type="radio"
        name="sex"
        value="male"
        checked={inf.sex === 'male'}
        className="mr-2"
        onChange={handleChange}
      />
      男性
      <input
        type="radio"
        name="sex"
        value="female"
        checked={inf.sex === 'female'}
        className="mr-2 ml-5"
        onChange={handleChange}
      />
      女性
    </div>
  </div>
);

export default staffInf;
