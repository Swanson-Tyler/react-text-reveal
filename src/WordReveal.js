import React from "react";
import TransitionBlock from "./TransitionBlock";

export default class WordReveal extends React.Component {
  static defaultProps = {
    canPlay: false,
    triggerOnce: true,
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
    perspective: false,
    perspectiveX: 100,
    perspectiveY: 100
  };

  constructor(props) {
    super(props);
    this.state = { lines: [] };
  }

  componentDidMount() {
    this.generateWords();
  }

  generateWords = () => {
    const { copy } = this.props;
    const lines = copy.split("\n");
    const wordLines = lines.map(line => {
      return line.split(" "); // separate by word
    });

    this.setState({ lines: wordLines });
  };

  render() {
    const {
      canPlay,
      triggerOnce,
      ease,
      bezierCurve,
      direction,
      offset,
      multilineMasking,
      multilineOffsetDelay,
      wordOffsetDelay,
      duration,
      opacity,
      opacityDelay,
      characterWordSpacing
    } = this.props;
    const { lines } = this.state;

    return <React.Fragment>  
        {lines.map((line, i) => {
        return (
            <LineWrapper
            key={i}
            {...this.props}
            multilineMasking={multilineMasking}
            >
            {line.map((word, j) => {
                return (
                <WordWrapper
                    key={j}
                    characterWordSpacing={characterWordSpacing}
                >
                    <TransitionBlock
                        triggerOnce={triggerOnce}
                        from={direction}
                        delay={i * multilineOffsetDelay + j * wordOffsetDelay}
                        animateOpacity={opacity}
                        duration={duration}
                        offset={`${offset}`}
                        canPlay={canPlay}
                        ease={ease}
                        transition={bezierCurve}
                        opacityDelay={i * opacityDelay + j * opacityDelay}
                        >
                        {word}
                    </TransitionBlock>
                </WordWrapper>
                );
            })}
            </LineWrapper>
        );
        })}
    </React.Fragment>;
  }
}

class LineWrapper extends React.PureComponent {
  render() {
    const { multilineMasking } = this.props;

    return (
      <div
        style={{
          display: "block",
          overflow: `${multilineMasking ? "hidden" : "visible"}`
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

class WordWrapper extends React.PureComponent {
  render() {
    const { characterWordSpacing } = this.props;

    return (
      <div
        style={{
          display: "inline-block",
          marginRight: `${characterWordSpacing}`
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
