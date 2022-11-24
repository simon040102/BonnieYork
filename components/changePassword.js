import React from 'react';

const changePassword = ({ setInf, inf, handleChange }) => {
  return (
    <div className="xl:2/12 container mx-auto w-8/12 lg:w-4/12">
      <p>請輸入密碼</p>
      <input
        name="password"
        value={inf?.password}
        onChange={handleChange}
        type="password"
        className="mb-4 h-10 w-full border border-black indent-3"
      />
      <p>再次輸入密碼</p>
      <input
        name="checkPassword"
        value={inf?.checkPassword}
        onChange={handleChange}
        type="password"
        className="mb-4 h-10 w-full border border-black indent-3"
      />
    </div>
  );
};

export default changePassword;
