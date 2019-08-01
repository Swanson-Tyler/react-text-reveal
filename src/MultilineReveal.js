import React from 'react';
import TransitionBlock from './TransitionBlock'
import { formatBezierCurveCSS } from './utils';

export default class MultiLineReveal extends React.Component {
  constructor(props) {
    super(props)
		this.state = { lines: [] };
	}

	componentDidMount() {
		this.generateLines();
	}

	generateLines = () => {
		const {copy} = this.props;
		const lines = copy.split('\n');
		this.setState({ lines: lines });
	}

  	render() {		
		const {lines} = this.state;
	
		const bezierCurve = formatBezierCurveCSS(transitionOptions.bezierCurve);

		return <React.Fragment>
    
            {lines.map((line, i) => {
                return (
                    <div key={i} {...this.props} onClick={onClick}>
                        <TransitionBlock 	
                            {...transitionOptions}
                            triggerOnce
                            from={transitionOptions.direction}
                            delay={i * transitionOptions.multilineOffsetDelay}
                            animateOpacity={transitionOptions.opacity}
                            duration={transitionOptions.duration}
                            offset={`${transitionOptions.offset}px`}
                            transition={bezierCurve}
                        >
                            {line}
                        </TransitionBlock>
                </div>);
            })}
        </React.Fragment>
  	}
}
