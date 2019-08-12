import * as React from 'react';
import TransitionBlock from '../TransitionBlock';

export default class CharacterReveal extends React.Component {
  state = { lines: [] };

  componentDidMount() {
    this.generateCharacters();
  }

  generateCharacters = () => {
    const { copy } = this.props;
    const wordLines = [...copy].map(line => {
      return line.split(' '); // separate by word
    });

    const characterLines = wordLines.map(word => {
      return word.map(w => w.split('')); // separate by character
    });

    this.setState({ lines: characterLines });
  };

  render() {
    const {
      animateOpacity,
      canPlay,
      characterOffsetDelay,
      characterWordSpacing,
      className,
      delay,
      duration,
      ease,
      from,
      multilineOffsetDelay,
      multilineMasking,
      offset,
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
          // We must keep track of what character we are on for animation purposes
          let characterCount = 0;
          return (
            <LineWrapper key={i} multilineMasking={multilineMasking}>
              {line.map((word, j) => {
                characterCount += word.length;

                return (
                  <WordWrapper key={j} characterWordSpacing={characterWordSpacing}>
                    {word.map((character, k, wordArray) => {
                      return (
                        <CharacterWrapper key={k}>
                          <TransitionBlock
                            animateOpacity={animateOpacity}
                            ease={ease}
                            canPlay={canPlay}
                            delay={
                              delay +
                              i * multilineOffsetDelay +
                              (characterCount - wordArray.length + k) * characterOffsetDelay
                            }
                            duration={duration}
                            from={from}
                            offset={offset}
                            perspective={perspective}
                            perspectiveX={perspectiveX}
                            perspectiveY={perspectiveY}
                            perspectiveZ={perspectiveZ}
                          >
                            {character}
                          </TransitionBlock>
                        </CharacterWrapper>
                      );
                    })}
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

CharacterReveal.defaultProps = {
  animateOpacity: true,
  characterOffsetDelay: 25,
  characterWordSpacing: `.15em`,
  className: '',
  delay: 0,
  duration: 1275,
  ease: 'cubic-bezier(0.666, 0.0, 0.237, 1.0)',
  from: 'bottom',
  multilineMasking: false,
  multilineOffsetDelay: 200,
  offset: `45px`,
  opacityDelay: 0,
  perspective: false,
  perspectiveFOV: 1000,
  perspectiveX: 0,
  perspectiveY: 0,
  perspectiveZ: 0
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
        marginRight: characterWordSpacing
      }}
    >
      {children}
    </div>
  );
};

const CharacterWrapper = ({ children }) => {
  return (
    <div
      style={{
        display: 'inline-block',
        width: 'auto'
      }}
    >
      {children}
    </div>
  );
};
