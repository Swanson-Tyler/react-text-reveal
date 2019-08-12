import * as React from 'react';

export default class TransitionBlock extends React.Component {
  getOpacity = () => {
    const { animateOpacity, canPlay } = this.props;

    if (canPlay || !animateOpacity) {
      return '1';
    }

    return '0';
  };

  getTransform = () => {
    const {
      canPlay,
      from,
      offset,
      perspective,
      perspectiveX,
      perspectiveY,
      perspectiveZ
    } = this.props;

    let transform;

    if (canPlay) {
      transform = 'translate3d(0,0,0) rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
    } else {
      switch (from) {
        case 'top':
          transform = `translate3d(0,-${offset},0)`;
          break;
        case 'bottom':
          transform = `translate3d(0,${offset},0)`;
          break;
        case 'left':
          transform = `translate3d(-${offset},0,0)`;
          break;
        case 'right':
          transform = `translate3d(${offset},0,0)`;
          break;
        default:
          transform = `translate3d(0,${offset},0)`;
          break;
      }
      // set perspective CSS 3d
      if (perspective) {
        transform = `${transform} rotateX(${perspectiveX}deg) rotateY(${perspectiveY}deg) rotateZ(${perspectiveZ}deg)`;
      }
    }

    return transform;
  };

  getTransition = () => {
    const { delay, duration, ease, opacityDelay, canPlay } = this.props;

    if (canPlay) {
      return `opacity ${duration}ms ease ${opacityDelay ||
        delay}ms, transform ${duration}ms ${ease} ${delay}ms`;
    }
    return `opacity 0ms ease 0ms, transform 0ms ease 0ms`;
  };

  getStyles = () => {
    const { display } = this.props;
    const transition = this.getTransition();
    const transform = this.getTransform();
    const opacity = this.getOpacity();

    return {
      display,
      opacity,
      transform,
      transition,
      width: '100%'
    };
  };

  render() {
    const { children } = this.props;
    const inlineStyle = this.getStyles();

    return (
      <div
        ref={r => {
          this.elRef = r;
        }}
      >
        <span style={inlineStyle}>{children}</span>
      </div>
    );
  }
}

TransitionBlock.defaultProps = {
  animateOpacity: true,
  canPlay: false,
  delay: 0,
  display: 'inline-block',
  duration: 1250,
  ease: 'ease-out',
  from: 'bottom',
  offset: '100px',
  opacityDelay: 0,
  perspective: false,
  perspectiveX: 0,
  perspectiveY: 0,
  perspectiveZ: 0
};
