const moment = require('moment');

const OUTPUT_TEMPLATE = '/* eslint-disable */\n/**\n * GENERATED FILE \n * @script npm run {script} \n * @generated {date}\n */\n\n{contents}\n';

/**
 * General use file template for files that are generated
 * @param {string} script - name of the script that generated the file
 * @param {string} contents - the generated contents
 */
function outputTemplate (script, contents) {
	return (OUTPUT_TEMPLATE)
		.replace(/\{script\}/, script)
		.replace(/\{date\}/, moment().format('MMMM Do YYYY, h:mm a'))
		.replace(/\{contents\}/, contents);
}
