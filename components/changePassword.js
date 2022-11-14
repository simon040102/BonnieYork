import React from 'react'

const changePassword = (props) => {
    const { setInf, inf, handleChange } = props;
  return (
    <div className="container mx-auto w-8/12 lg:w-4/12 xl:2/12">
      <p>請輸入密碼</p>
      <input
        name="password"
        value={inf?.password}
        onChange={handleChange}
        type="password"
        className="border-black border w-full mb-4 h-10 indent-3"
      />
      <p>再次輸入密碼</p>
      <input
        name="checkPassword"
        value={inf?.checkPassword}
        onChange={handleChange}
        type="password"
        className="border-black border w-full mb-4 h-10 indent-3"
      />
    </div>
  );
}

export default changePassword