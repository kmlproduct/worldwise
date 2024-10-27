import PropTypes from "prop-types";
function CityItem() {
  return <li>city</li>;
}
CityItem.propTypes = {
  city: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      cityName: PropTypes.string.isRequired,
      emoji: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};
export default CityItem;
