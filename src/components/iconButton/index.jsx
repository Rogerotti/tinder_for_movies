import React from 'react';
import PropTypes from 'prop-types';
import { getIcon } from 'src/icons/iconResolver';
import './styles.scss';

const IconButton = (props) => {
  const Icon = getIcon(props.icon);

  return (
    <div className={'icon-button'} onClick={props.onClick}>
      <Icon />
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
