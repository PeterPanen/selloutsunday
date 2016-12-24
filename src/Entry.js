import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Label = ({ children, style }) => <div style={style} className="label">{children}</div>;

const LikeButton = props => (
  <div className="likebutton">
    <img src="https://cdn3.iconfinder.com/data/icons/complete-set-icons/512/favourite512x512.png" alt="Heart" />
    <h3>{props.likes}</h3>
  </div>
)

const Thumbnail = ({ youtubeId }) => (
  <div className="thumbnail">
     <img src={`https://img.youtube.com/vi/${youtubeId}/0.jpg`} alt="Heart" />
  </div>
)

class Entry extends Component {
  state = {
    hovering: false,
    blinking: false,
  };

  onEnter() {
    this.setState({
      hovering: true,
    });
  }

  onLeave() {
    this.setState({
      hovering: false,
      blinking: false,
    });
  }

  onClick() {
    this.setState({
      blinking: true,
    });
    setTimeout(() => this.onLeave(), 400);
  }

  renderLabel(isVisible, blinking) {
    if (isVisible) {
      return <Label style={blinking ? { marginLeft: -32 } : {}}>{blinking ? 'Copied' : 'Copy to clipboard'}</Label>;
    }
  }

  render() {
    const { likes, description, youtubeId } = this.props;
    const { hovering, blinking } = this.state;
    return (
      <div data-clipboard-text={`https://www.youtube.com/watch?v=${youtubeId}`} onMouseEnter={() => this.onEnter()} onMouseLeave={() => this.onLeave()} onClick={() => this.onClick()} className="entry">
        <LikeButton likes={likes} />
        <div className="description">
          {description}
        </div>
        <Thumbnail youtubeId={youtubeId} />
        <ReactCSSTransitionGroup
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          transitionName="label"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
          {this.renderLabel(hovering, blinking)}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default Entry;
