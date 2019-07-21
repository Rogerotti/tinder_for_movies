import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const IconButton = (props) => {
  const image = props.icon ? (<img src={props.icon} alt={props.text} />) : undefined;

  return (
    <div className={'icon-button'} onClick={props.onClick}>
      {image}
      {props.text}
    </div>
  );
};


IconButton.defaultProps = {
  icon: undefined,
  text: undefined,
  onClick: () => {},
};

IconButton.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default IconButton;
