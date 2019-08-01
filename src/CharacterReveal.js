import * as React from "react";
import TransitionBlock from "./TransitionBlock";

export default class CharacterReveal extends React.Component {
  static defaultProps = {
    delay: 0,
    ease: "cubic-bezier(0.666, 0.000, 0.237, 1.000)",
    offset: `45px`,
    duration: 1275,
    animateOpacity: true,
    opacityDelay: 0,
    direction: "bottom",
    reveal: "character",
    multilineOffsetDelay: 200, // ms
    multilineMasking: true,
    wordOffsetDelay: 200, // ms
    characterOffsetDelay: 25, // ms
    characterWordSpacing: `.15em`,
    triggerOnce: true,
    perspective: false,
    perspectiveX: 100,
    perspectiveY: 100,
    perspectiveZ: 1
  };

  constructor(props) {
    super(props);
    this.state = { lines: [] };
  }

  componentDidMount() {
    this.generateCharacters();
  }

  generateCharacters = () => {
    const { copy } = this.props;
    const wordLines = [...copy].map(line => {
      return line.split(" "); // separate by word
    });

    const characterLines = wordLines.map(word => {
      return word.map(w => w.split("")); // separate by character
    });

    this.setState({ lines: characterLines });
  };

  render() {
    const {
      direction,
      multilineOffsetDelay,
      characterOffsetDelay,
      animateOpacity,
      duration,
      offset,
      ease,
      canPlay,
      triggerOnce,
      delay,
      perspectiveX,
      perspectiveY,
      perspectiveZ,
      perspective
    } = this.props;
    const { lines } = this.state;

    return (
      <React.Fragment>
        {lines.map((line, i) => {
          // We must keep track of what character we are on for animation purposes
          let characterCount = 0;
          return (
            <LineWrapper key={i} {...this.props}>
              {line.map((word, j) => {
                characterCount = characterCount + word.length;

                return (
                  <WordWrapper key={j} {...this.props}>
                    {word.map((character, k, wordArray) => {
                      return (
                        <CharacterWrapper key={k} {...this.props}>
                          <TransitionBlock
                            triggerOnce={triggerOnce}
                            from={direction}
                            delay={
                              delay +
                              i * multilineOffsetDelay +
                              (characterCount - wordArray.length + k) *
                                characterOffsetDelay
                            }
                            animateOpacity={animateOpacity}
                            duration={duration}
                            offset={offset}
                            ease={ease}
                            canPlay={canPlay}
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
      </React.Fragment>
    );
  }
}

const LineWrapper = props => {
  const { multilineMasking } = props;

  return (
    <div
      style={{
        display: "block",
        overflow: `${multilineMasking ? "hidden" : "visible"}`
      }}
    >
      {props.children}
    </div>
  );
};

const WordWrapper = props => {
  const { characterWordSpacing } = props;

  return (
    <div
      style={{
        display: "inline-block",
        marginRight: characterWordSpacing
      }}
    >
      {props.children}
    </div>
  );
};

const CharacterWrapper = props => {
  return (
    <div
      style={{
        display: "inline-block",
        width: "auto"
      }}
    >
      {props.children}
    </div>
  );
};
