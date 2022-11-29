import React from 'react';
import Router from 'next/router';
const signupFinished = ({ text }) => {
  return (
    <>
      <button
        className="h-10 w-60 rounded-lg bg-secondary text-white"
        onClick={() => {
          Router.push('/');
        }}
      >
        {text}
      </button>
    </>
  );
};

export default signupFinished;
