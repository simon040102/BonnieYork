import React from 'react';

const changePassword = ({ setInf, inf, handleChange }) => {
  return (
    <div className="container mx-auto w-full px-8 lg:w-8/12  lg:px-0">
      <h2 className="my-8 text-center text-3xl font-bold">歡迎使用邦尼約克</h2>
      <div className="relative">
        <p className="absolute -top-2.5 left-4 bg-white text-unSelect">
          請輸入密碼
        </p>
        <input
          name="password"
          value={inf?.password}
          onChange={handleChange}
          type="password"
          className="mb-6 h-12 w-full rounded-lg border border-unSelect indent-3 "
        />
      </div>
      <div className="relative">
        <p className="absolute -top-2.5 left-4 bg-white text-unSelect">
          再次輸入密碼
        </p>
        <input
          name="checkPassword"
          value={inf?.checkPassword}
          onChange={handleChange}
          type="password"
          className="mb-6 h-12 w-full rounded-lg border border-unSelect indent-3"
        />
      </div>
    </div>
  );
};

export default changePassword;
