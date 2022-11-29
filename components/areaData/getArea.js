import React, { useEffect } from 'react';
import areaData from './areaData';
const getArea = ({ city }) => {
  const area = areaData[city];
  const areaOption = () => {
    return area?.map((item, index) => {
      return (
        <option key={index} value={item}>
          {item}
        </option>
      );
    });
  };
  useEffect(() => {}, [city]);
  return <>{areaOption()}</>;
};

export default getArea;
