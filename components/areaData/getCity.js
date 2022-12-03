import areaData from './areaData';

const getCity = () => {
  const city = Object.keys(areaData);

  const cityOption = () =>
    city.map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <option key={index} value={item}>
        {item}
      </option>
    ));

  return <>{cityOption()}</>;
};

export default getCity;
