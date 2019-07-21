import React from 'react';
import PropTypes from 'prop-types';
import NotFoundImage from 'src/images/not-found.png';
import './styles.scss';

const getImage = (imageURL) => {
  if (!imageURL) {
    return NotFoundImage;
  }
  return imageURL;
};

const ImagePanel = (props) => {
  const image = getImage(props.imageURL);
  return (
    <img className="image-panel" src={image} alt={props.summary} draggable={false} />
  );
};


ImagePanel.defaultProps = {
  imageURL: undefined,
  summary: undefined,
};

ImagePanel.propTypes = {
  imageURL: PropTypes.string,
  summary: PropTypes.string,
};

export default ImagePanel;
