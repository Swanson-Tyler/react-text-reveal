import React from 'react';
import TransitionBlock from '../TransitionBlock';

export default class WordReveal extends React.PureComponent {
  state = { lines: [] };

  componentDidMount() {
    this.generateWords();
  }

  generateWords = () => {
    const { copy } = this.props;
    const wordLines = copy.map(line => {
      return line.split(' '); // separate by word
    });

    this.setState({ lines: wordLines });
  };

  render() {
    const {
      animateOpacity,
      canPlay,
      characterWordSpacing,
      className,
      from,
      duration,
      ease,
      multilineMasking,
      multilineOffsetDelay,
      offset,
      opacityDelay,
      perspective,
      perspectiveFOV,
      perspectiveX,
      perspectiveY,
      perspectiveZ,
      wordOffsetDelay
    } = this.props;

    const { lines } = this.state;

    return (
      <div
        className={className}
        style={{ perspective: perspective && perspectiveFOV ? `${perspectiveFOV}px` : 'unset' }}
      >
        {lines.map((line, i) => {
          return (
            <LineWrapper key={i} multilineMasking={multilineMasking}>
              {line.map((word, j) => {
                return (
                  <WordWrapper key={j} characterWordSpacing={characterWordSpacing}>
                    <TransitionBlock
                      animateOpacity={animateOpacity}
                      ease={ease}
                      canPlay={canPlay}
                      delay={i * multilineOffsetDelay + j * wordOffsetDelay}
                      from={from}
                      duration={duration}
                      offset={offset}
                      opacityDelay={i * opacityDelay + j * opacityDelay}
                      perspective={perspective}
                      perspectiveX={perspectiveX}
                      perspectiveY={perspectiveY}
                      perspectiveZ={perspectiveZ}
                    >
                      {word}
                    </TransitionBlock>
                  </WordWrapper>
                );
              })}
            </LineWrapper>
          );
        })}
      </div>
    );
  }
}

WordReveal.defaultProps = {
  animateOpacity: true,
  canPlay: false,
  characterOffsetDelay: 25, // ms
  characterWordSpacing: `.15em`,
  delay: 0,
  from: 'bottom',
  duration: 1275,
  ease: 'cubic-bezier(0.666, 0.0, 0.237, 1.0)',
  multilineMasking: false,
  multilineOffsetDelay: 200,
  offset: `45px`,
  opacityDelay: 0,
  perspective: false,
  perspectiveFOV: 1000,
  perspectiveX: 0,
  perspectiveY: 0,
  perspectiveZ: 0,
  wordOffsetDelay: 200 // ms
};

const LineWrapper = props => {
  const { multilineMasking, children } = props;

  return (
    <div
      style={{
        display: 'block',
        overflow: `${multilineMasking ? 'hidden' : 'visible'}`
      }}
    >
      {children}
    </div>
  );
};

const WordWrapper = props => {
  const { characterWordSpacing, children } = props;

  return (
    <div
      style={{
        display: 'inline-block',
        marginRight: `${characterWordSpacing}`
      }}
    >
      {children}
    </div>
  );
};
