import React from 'react';
import { useRouter } from 'next/router';
const signupFinished = ({ text }) => {
  const router = useRouter();
  return (
    <>
      <button
        className="h-10 w-60 rounded-lg bg-secondary text-white"
        onClick={(e) => {
          e.preventDefault();
          router.push('/');
        }}
      >
        {text}
      </button>
    </>
  );
};

export default signupFinished;
