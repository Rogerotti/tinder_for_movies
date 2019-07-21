import React from 'react';
import PropTypes from 'prop-types';
import { PushSpinner } from 'react-spinners-kit';
import './styles.scss';

const Loader = (props) => {
  const style = {
    display: props.isFetching ? 'flex' : 'none',
  };
  return (
    <div className="loader" style={style}>
      <PushSpinner size={60} color="#686769" loading={props.isFetching} />
    </div>
  );
};

Loader.defaultProps = {
  isFetching: false,
};

Loader.propTypes = {
  isFetching: PropTypes.bool,
};

export default Loader;
