// import modules
import React, { Component } from 'react';
import _ from 'underscore';
import $ from 'jquery';
import CommonButton from 'components/Common/CommonButton';
import { commands } from './testingSuite';

/**
 * ConsoleCommand
 * @desc
 */
class ConsoleCommand extends Component {
	constructor (props) {
		super(props);

		this.state = {
			value: '',
			selectValue: '',
			isVisible: false
		};

		_.bindAll(this, 'handleKeyPress', 'handleSelectChange', 'handleCommandChange', 'handleRunClick');
	}

	componentDidMount () {
		$(window).on('keydown', this.handleKeyPress);
	}

	componentWillUnmount () {
		$(window).off('keydown', this.handleKeyPress);
	}

	handleKeyPress (evt) {
		if (evt.ctrlKey && evt.altKey && evt.keyCode === 78) {
			this.setState({ isVisible: !this.state.isVisible });
		}
	}

	handleCommandChange (e) {
		this.setState({ value: e.target.value });
	}

	handleSelectChange (e) {
		this.setState({ selectValue: e.target.value });
	}

	handleRunClick () {
		const { selectValue, value } = this.state,
			args = value.split(' ');

		// attempt to call method on window
		if (commands[selectValue]) {
			console.info(`Calling the test command ${selectValue}(${(args || []).join(',')})`);
			commands[selectValue].apply(null, args);
		}

		// reset view
		this.setState({ value: '', selectValue: '', isVisible: false });
	}

	renderOptions () {
		return _.keys(commands).map((keyName, i) => {
			return (
				<option key={i} value={keyName}>
					{keyName}
				</option>
			);
		});
	}

	render () {
		const { isVisible, value, selectValue } = this.state;

		return isVisible ? (
			<div style={styles.base}>
				<form
					style={styles.form}
					onSubmit={e => {
						e.preventDefault();
						return false;
					}}>
					<div className="form-group m-b0 m-r10 w-200">
						<select className="form-control" style={styles.formSelect} value={selectValue} onChange={this.handleSelectChange}>
							<option value="">- Select -</option>
							{this.renderOptions()}
						</select>
					</div>

					<div className="form-group m-b0 m-r10 dsp-flex-grow">
						<input type="text" className="form-control" style={styles.formInput} placeholder="method args" value={value} onChange={this.handleCommandChange} autoFocus={true} />
					</div>
					<div className="form-group m-b0">
						<CommonButton type="submit" size="sm" onClick={this.handleRunClick}>
							Run
						</CommonButton>
					</div>
				</form>
			</div>
		) : null;
	}
}

const styles = {
	base: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		background: '#525050',
		borderTop: '2px solid #3aa0f6',
		boxShadow: 'inset 0 1px 1px black',
		padding: 10,
		zIndex: 9999
	},
	form: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	formInput: {
		fontSize: 12,
		fontFamily: 'monospace',
		height: 33
	},
	formSelect: {
		fontSize: 14,
		padding: '4px 12px',
		height: 33
	}
};

//export module
export default ConsoleCommand;
