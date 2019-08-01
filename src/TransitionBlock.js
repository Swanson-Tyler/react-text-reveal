// @flow
import * as React from "react";

export default class TransitionBlock extends React.Component {
  static defaultProps = {
    canPlay: true,
    from: "bottom",
    delay: 0,
    ease: "ease-out",
    duration: 1250,
    offset: "100px",
    animateOpacity: true,
    triggerOnce: true,
    threshold: 0,
    display: "inline-block",
    opacityDelay: 0,
    perspective: false,
    perspectiveX: 100,
    perspectiveY: 100,
    perspectiveZ: 1
  };

  getOpacity = () => {
    const { animateOpacity, canPlay } = this.props;

    if (canPlay || !animateOpacity) {
      return "1";
    }

    return "0";
  };

  getTransform = () => {
    const {
      offset,
      from,
      canPlay,
      perspective,
      perspectiveX,
      perspectiveY,
      perspectiveZ
    } = this.props;

    let transform;

    if (canPlay) {
      transform = "translate3d(0,0,0) rotateX(0) rotateY(0) scale(1)";
    } else {
      switch (from) {
        case "top":
          transform = `translate3d(0,-${offset},0)`;
          break;
        case "bottom":
          transform = `translate3d(0,${offset},0)`;
          break;
        case "left":
          transform = `translate3d(-${offset},0,0)`;
          break;
        case "right":
          transform = `translate3d(${offset},0,0)`;
          break;
        default:
          transform = `translate3d(0,${offset},0)`;
          break;
      }
      // set perspective CSS 3d
      if (perspective) {
        transform = `${transform} rotateX(${perspectiveX}deg) rotateY(${perspectiveY}deg) scale(${perspectiveZ})`;
      }
    }

    return transform;
  };

  getTransition = () => {
    const { delay, duration, ease, opacityDelay, canPlay } = this.props;
    if (canPlay) {
      return `opacity ${duration}ms ease ${
        opacityDelay ? opacityDelay : delay
      }ms, transform ${duration}ms ${ease} ${delay}ms`;
    } else {
      return `opacity 0ms ease 0ms, transform 0ms ease 0ms`;
    }
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
      width: "100%"
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
