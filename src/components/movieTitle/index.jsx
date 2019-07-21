import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import { isString } from 'src/helper/typeHelper';
import './styles.scss';

const getMovieTitle = (text, intl) => {
  if (!text || (isString(text) && text.trim().length === 0)) {
    return intl.messages.Global_NoTitle;
  }
  return text;
};

const getMovieRating = (rating, maxRating, intl) => {
  const parsedRating = parseFloat(rating);
  if (!parsedRating && parsedRating !== 0) {
    return intl.messages.Global_NoRating;
  }
  const currentMaxRating = maxRating !== undefined && maxRating !== null ? maxRating : 10;
  if (parsedRating > maxRating) {
    return `(${currentMaxRating}/${currentMaxRating})`;
  }
  return `(${parsedRating}/${currentMaxRating})`;
};

const MovieTitle = (props) => {
  return (
    <div className="movie-title" draggable={false}>
      {`${getMovieTitle(props.title, props.intl)} ${props.ignoreRating ? '' : getMovieRating(props.rating, props.maxRating, props.intl)}`}
    </div>
  );
};


MovieTitle.defaultProps = {
  title: undefined,
  rating: undefined,
  ignoreRating: false,
  maxRating: 10,
};

MovieTitle.propTypes = {
  intl: intlShape.isRequired,
  title: PropTypes.string,
  rating: PropTypes.number,
  maxRating: PropTypes.number,
  ignoreRating: PropTypes.bool,
};

export default injectIntl(MovieTitle);
