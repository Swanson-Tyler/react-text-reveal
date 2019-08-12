import React from 'react';
import TransitionBlock from '../TransitionBlock';

export default class MultiLineReveal extends React.PureComponent {
  state = { lines: [] };

  componentDidMount() {
    this.generateLines();
  }

  generateLines = () => {
    const { copy } = this.props;
    this.setState({ lines: copy });
  };

  render() {
    const {
      animateOpacity,
      canPlay,
      className,
      display,
      duration,
      ease,
      from,
      multilineOffsetDelay,
      offset,
      opacityDelay,
      perspective,
      perspectiveFOV,
      perspectiveX,
      perspectiveY,
      perspectiveZ
    } = this.props;
    const { lines } = this.state;

    return (
      <div
        className={className}
        style={{ perspective: perspective && perspectiveFOV ? `${perspectiveFOV}px` : 'unset' }}
      >
        {lines.map((line, i) => {
          return (
            <div role="presentation" key={i}>
              <TransitionBlock
                animateOpacity={animateOpacity}
                canPlay={canPlay}
                delay={i * multilineOffsetDelay}
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
                {line}
              </TransitionBlock>
            </div>
          );
        })}
      </div>
    );
  }
}

MultiLineReveal.defaultProps = {
  animateOpacity: true,
  canPlay: false,
  className: '',
  delay: 0,
  duration: 1275,
  ease: 'cubic-bezier(0.666, 0.0, 0.237, 1.0)',
  from: 'bottom',
  offset: `45px`,
  opacityDelay: 0,
  multilineMasking: false,
  multilineOffsetDelay: 200,
  perspective: false,
  perspectiveFOV: 1000,
  perspectiveX: 0,
  perspectiveY: 0,
  perspectiveZ: 0
};
