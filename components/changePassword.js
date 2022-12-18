/* eslint-disable no-console */
import { useRouter } from 'next/router';

const changePassword = ({ inf, handleChange }) => {
  const router = useRouter().pathname;

  const checkPassword = () => {
    const passwordTest = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/;
    if (!passwordTest.test(inf?.Password)) {
      return (
        <div className="mb-6 -mt-4 text-sm text-red">
          密碼必須8位元以上並包含一個大寫字母及一個小寫字母!
        </div>
      );
    }
    if (inf?.Password !== inf?.CheckPassword) {
      return <div className="mb-6 -mt-4 text-sm text-red">密碼不相符！</div>;
    }
    return <> </>;
  };
  return (
    <div className="container mx-auto w-full px-8 lg:w-8/12  lg:px-0">
      <h2 className="my-8 text-center text-3xl font-bold">
        {router === '/signup' && '歡迎使用邦尼約克'}
      </h2>

      {router === '/profile' && (
        <div className="relative">
          <p className="absolute -top-2.5 left-4 bg-white text-unSelect">
            請輸入舊密碼
          </p>
          <input
            name="OriginalPassword"
            value={inf?.OriginalPassword}
            onChange={handleChange}
            type="password"
            className="mb-6 h-12 w-full rounded-lg border border-unSelect indent-3 "
          />
        </div>
      )}
      <div className="relative">
        <p className="absolute -top-2.5 left-4 bg-white text-unSelect">
          請入輸新密碼
        </p>
        <input
          name="Password"
          value={inf?.Password}
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
          name="CheckPassword"
          value={inf?.CheckPassword}
          onChange={handleChange}
          type="password"
          className="mb-6 h-12 w-full rounded-lg border border-unSelect indent-3"
        />
      </div>
      {checkPassword()}
    </div>
  );
};

export default changePassword;
