import React from 'react';
import PropTypes from 'prop-types';

const Margin = (props) => {
  const style = {
    marginLeft: `${props.marginLeft}${props.unit}`,
    marginRight: `${props.marginRight}${props.unit}`,
    marginTop: `${props.marginTop}${props.unit}`,
    marginBottom: `${props.marginBottom}${props.unit}`,
  };

  return (
    <div style={style}>
      {props.children}
    </div>
  );
};

Margin.defaultProps = {
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0,
  marginBottom: 0,
  children: undefined,
  unit: 'px',
};

Margin.propTypes = {
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  unit: PropTypes.oneOf(['px', 'em', 'vh', 'vw', 'vmin']),
  children: PropTypes.node,
};

export default Margin;
