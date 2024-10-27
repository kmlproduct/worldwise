import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
function CityList({ cities, isLoading }) {
  return (
    <>
      {isLoading && <Spinner />}
      <ul className={styles.cityList}>
        {cities.map((city) => (
          <CityItem city={city} key={city.id} />
        ))}
      </ul>
    </>
  );
}

CityList.propTypes = {
  cities: PropTypes.array.isRequired, // or PropTypes.arrayOf(PropTypes.object) if it's an array of objects
  isLoading: PropTypes.bool.isRequired, // Use PropTypes.bool if it's a boolean
};
export default CityList;
