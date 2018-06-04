import _ from 'underscore';

/**
 * Simple custom logger
 * @param {string} className
 */
export function logFunc (className) {
	let stub = () => {};
	stub.warn = noop;
	stub.info = noop;
	stub.off = () => stub;

	// internal only
	if (process.env.REACT_APP_IS_INTERNAL_BUILD !== 'true') {
		return stub;
	}

	const getMessage = (methodName, msg, data) => {
		let result = className + '.' + methodName;
		if(_.isObject(msg)) {
			// treat like the data argument
			result = result + ' ' + JSON.stringify(msg);
		} else {
			result = msg && msg.length ? result + ': ' + msg : result;
		}
		result = data ? result + ' ' + JSON.stringify(data) : result;
		return result;
	};

	let logger = (methodName, msg='', data=null) => {
		console.log( getMessage(methodName, msg, data) );
	};

	// add static methods
	logger.warn = (methodName, msg, data) => { console.warn(getMessage(methodName, msg, data)); };
	logger.info = (methodName, msg, data) => { console.info(getMessage(methodName, msg, data)); };
	logger.off = () => stub;

	return logger;
}
