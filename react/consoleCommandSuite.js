import _ from 'underscore';
import * as CommerceCommands from './commands/CommerceCommands';

// Commands array that is used with ConsoleCommand Component
export let commands = {};

// only run in development mode
// The idea is that if you run this function, you should be able to view screens without any calls to the backend
// NOTE: these scripts should be run on the home screen, after login
export function init () {
	/**
	 *
	 * Test commands for triggering Modals
	 *
	 */
	commands = _.extend(commands, CommerceCommands);


	// add to window object as well
	window.commands = commands;
}
