import * as React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import { moviePropType } from 'src/helper/propTypes';
import MovieCard from 'components/movieCard';
import IconButton from 'components/iconButton';
import Margin from 'components/margin';
import Tooltip from 'react-tooltip-lite';

import './styles.scss';

class Stack extends React.Component {
  state = {
    dragging: false,
  }

  onDrag = (event, ref) => {
    const degree = -(this.state.centerX - event.pageX) / 13;
    this.moveCard(ref, degree, event.pageX);
  }

  onDragStart = (event, ref) => {
    this.disableSystemDragImageShadow(event);
    this.startMovingCard(ref);
  }

  onDragEnd = (event, ref, id) => {
    this.resetCardStyle(ref);
    this.checkCardMoveEndCondition(event.pageX, id);
  }

  onTouchEnd = (event, ref, id) => {
    this.resetCardStyle(ref);
    const [firstElement] = event.changedTouches;
    const { pageX } = firstElement;
    this.checkCardMoveEndCondition(pageX, id);
  }

  onTouchStart = (event, ref) => {
    this.startMovingCard(ref);
  }

  onTouchMove = (event, ref) => {
    const [firstElement] = event.changedTouches;
    const { pageX } = firstElement;
    const degree = -(this.state.centerX - pageX) / 13;
    this.moveCard(ref, degree, pageX);
  }

  checkCardMoveEndCondition = (pageX, id) => {
    const maxWindowWidth = window.innerWidth;
    if (pageX / maxWindowWidth < 0.25) {
      this.props.onDelete(id);
    } else if ((maxWindowWidth - pageX) / maxWindowWidth < 0.25) {
      this.props.onDelete(id);
    }
    this.setState({
      dragging: false,
    });
  }

  disableSystemDragImageShadow = (event) => {
    const img = new Image();
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
    event.dataTransfer.setDragImage(img, 0, 0);
  }

  resetCardStyle = (cardRef) => {
    cardRef.current.style.left = '';
    cardRef.current.style.top = '';
    cardRef.current.style.transform = 'rotate(0deg)';
    cardRef.current.style.opacity = 1;
    cardRef.current.style.position = 'unset';
  }

  moveCard = (cardRef, degree, pageX) => {
    cardRef.current.style.transform = `rotate(${degree}deg)`;
    cardRef.current.style.left = `${pageX - (cardRef.current.offsetWidth / 2)}px`;
    cardRef.current.style.opacity = 1 - (Math.abs(degree) / 50);
  }

  startMovingCard = (cardRef) => {
    const width = cardRef.current.clientWidth;
    const centerX = cardRef.current.offsetLeft + (width / 2);
    cardRef.current.style.position = 'absolute';
    this.setState({
      centerX,
      dragging: true,
    });
  }

  getRefreshStateButtonPanel = () => {
    return (
      <div className="button-panel">
        <IconButton icon={'refreshIcon'} onClick={() => this.props.onRefresh()} />
      </div>
    );
  }

  getStandardButtonPanel = () => {
    return (
      <div className="button-panel">
        <Margin marginRight={10} unit={'vw'}>
          <IconButton icon={'checkIcon'} onClick={() => this.props.onAdd(this.props.movies[0].id)} />
        </Margin>
        <Tooltip className="target" arrow={false} content={this.props.movies[0].summary ? this.props.movies[0].summary : ''} direction="down" eventOn="onClick" eventOff="onMouseOut" >
          <IconButton icon={'infoIcon'} />
        </Tooltip>
        <Margin marginLeft={10} unit={'vw'}>
          <IconButton icon={'rejectIcon'} onClick={() => this.props.onDelete(this.props.movies[0].id)} />
        </Margin>
      </div>
    );
  }

  getButtonPanel = () => {
    let buttonPanel = null;
    if (this.props.movies.length > 0 && (this.props.movies.length !== 1 || !this.state.dragging)) {
      buttonPanel = this.getStandardButtonPanel();
    } else if (this.props.movies.length === 0) {
      buttonPanel = this.getRefreshStateButtonPanel();
    }
    return buttonPanel;
  }

  getCards = () => {
    if (this.props.movies && this.props.movies.length > 0) {
      return this.props.movies.map((movie, index) => {
        return (
          <MovieCard
            key={movie.id}
            movie={movie}
            onDrag={this.onDrag}
            onDragStart={this.onDragStart}
            onDragEnd={(event, ref) => { this.onDragEnd(event, ref, movie.id); }}
            onTouchMove={this.onTouchMove}
            onTouchStart={this.onTouchStart}
            onTouchEnd={(event, ref) => { this.onTouchEnd(event, ref, movie.id); }}
            display={this.displayCardChecker(index)}
            zIndex={this.props.movies.length - index}
          />);
      });
    }
    return (
      <MovieCard
        movie={{ title: this.props.intl.messages.Global_NoData }}
        display
        ignoreRating
      />
    );
  }

  displayCardChecker = (index) => {
    if (this.state.dragging && index === 1) {
      return true;
    }

    if (index === 0) {
      return true;
    }
    return false;
  }

  render () {
    return (
      <div className="stack">
        <div className="stack-panel">
          {this.getCards()}
        </div>
        {this.getButtonPanel()}
      </div>);
  }
}

Stack.defaultProps = {
  onAdd: () => {},
  onDelete: () => {},
  onRefresh: () => {},
  movies: [],
};

Stack.propTypes = {
  intl: intlShape.isRequired,
  onAdd: PropTypes.func,
  onDelete: PropTypes.func,
  onRefresh: PropTypes.func,
  movies: PropTypes.arrayOf(moviePropType),
};

export default injectIntl(Stack);
