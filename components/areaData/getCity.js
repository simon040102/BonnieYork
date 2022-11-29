import React from 'react';
import areaData from './areaData';

const getCity = () => {
  const city = Object.keys(areaData);

  const cityOption = () => {
    return city.map((item, index) => {
      return (
        <option key={index} value={item}>
          {item}
        </option>
      );
    });
  };

  return <>{cityOption()}</>;
};

export default getCity;
