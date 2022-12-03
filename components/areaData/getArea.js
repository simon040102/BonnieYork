/* eslint-disable no-undef */
import { useEffect } from 'react';
import areaData from './areaData';

const getArea = ({ city }) => {
  const area = areaData[city];
  const areaOption = () =>
    area?.map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <option key={index} value={item}>
        {item}
      </option>
    ));
  useEffect(() => {}, [city]);
  return <>{areaOption()}</>;
};

export default getArea;
