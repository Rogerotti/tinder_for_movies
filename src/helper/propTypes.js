import PropTypes from 'prop-types';

export const moviePropType = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
  imageURL: PropTypes.string,
  summary: PropTypes.string,
});
