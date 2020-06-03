import React from 'react';
import TransitionBlock from '../TransitionBlock';

export default class Reveal extends React.PureComponent {
  componentDidMount() {
    this.onLoad();
  }

  onLoad = () => {
    const { onLoad } = this.props;
    if (onLoad) {
      onLoad();
    }
  };

  render() {
    const {
      animateOpacity,
      canPlay,
      children,
      className,
      delay,
      display,
      duration,
      ease,
      from,
      offset,
      opacityDelay,
      perspective,
      perspectiveFOV,
      perspectiveX,
      perspectiveY,
      perspectiveZ
    } = this.props;

    return (
      <div
        className={className}
        style={{ perspective: perspective && perspectiveFOV ? `${perspectiveFOV}px` : 'unset' }}
      >
        <TransitionBlock
          animateOpacity={animateOpacity}
          canPlay={canPlay}
          delay={delay}
          display={display}
          duration={duration}
          ease={ease}
          from={from}
          offset={offset}
          opacityDelay={opacityDelay}
          perspective={perspective}
          perspectiveX={perspectiveX}
          perspectiveY={perspectiveY}
          perspectiveZ={perspectiveZ}
        >
          {children}
        </TransitionBlock>
      </div>
    );
  }
}

Reveal.defaultProps = {
  animateOpacity: true,
  canPlay: false,
  className: '',
  delay: 0,
  duration: 1275,
  ease: 'ease-out',
  from: 'bottom',
  offset: `45px`,
  opacityDelay: 0,
  multilineOffsetDelay: 200, // ms
  multilineMasking: false,
  perspective: false,
  perspectiveFOV: 1000,
  perspectiveX: 0,
  perspectiveY: 0,
  perspectiveZ: 0,
  onLoad: undefined
};
