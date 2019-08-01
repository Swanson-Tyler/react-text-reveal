export const formatBezierCurveCSS = bezierCurve => {
	return `cubic-bezier(${bezierCurve.join(',')})`
}

export const isIE = () => {
    const ua = window.navigator.userAgent;
    const msie = ua.indexOf('MSIE ');

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        // If Internet Explorer, return true
        return true;
    }
    return false;
};