import * as React from 'react';
import PropTypes from 'prop-types';
import { moviePropType } from 'src/helper/propTypes';
import MoveTitle from 'components/movieTitle';
import ImagePanel from 'components/imagePanel';

import './styles.scss';

class MovieCard extends React.Component {

  constructor (props) {
    super(props);
    this.movieCardRef = React.createRef();
  }

  onDrag = (event) => {
    this.props.onDrag(event, this.movieCardRef);
  }

  onDragStart = (event) => {
    this.props.onDragStart(event, this.movieCardRef);
  }

  onDragEnd = (event) => {
    this.props.onDragEnd(event, this.movieCardRef);
  }

  onTouchMove = (event) => {
    this.props.onTouchMove(event, this.movieCardRef);
  }

  onTouchStart = (event) => {
    this.props.onTouchStart(event, this.movieCardRef);
  }

  onTouchEnd = (event) => {
    this.props.onTouchEnd(event, this.movieCardRef);
  }

  render () {
    let className = 'movie-card';
    if (this.props.display) {
      className += ' display';
    }

    let style = null;

    if (this.props.zIndex !== null && this.props.zIndex !== undefined) {
      style = { zIndex: this.props.zIndex };
    }

    return (
      <div style={style} className={className} ref={this.movieCardRef} draggable onDrag={this.onDrag} onDragStart={this.onDragStart} onDragEnd={this.onDragEnd} onTouchEnd={this.onTouchEnd} onTouchStart={this.onTouchStart} onTouchMove={this.onTouchMove}>
        <MoveTitle title={this.props.movie.title} rating={this.props.movie.rating} ignoreRating={this.props.ignoreRating} />
        <ImagePanel imageURL={this.props.movie.imageURL} />
      </div>
    );
  }
}

MovieCard.defaultProps = {
  zIndex: undefined,
  movie: undefined,
  display: true,
  ignoreRating: false,
  onDrag: () => {},
  onDragStart: () => {},
  onDragEnd: () => {},
  onTouchMove: () => {},
  onTouchStart: () => {},
  onTouchEnd: () => {},
};

MovieCard.propTypes = {
  zIndex: PropTypes.number,
  movie: moviePropType,
  ignoreRating: PropTypes.bool,
  display: PropTypes.bool,
  onDrag: PropTypes.func,
  onDragStart: PropTypes.func,
  onDragEnd: PropTypes.func,
  onTouchMove: PropTypes.func,
  onTouchStart: PropTypes.func,
  onTouchEnd: PropTypes.func,
};

export default (MovieCard);
