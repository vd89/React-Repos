/** @format */

import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
		};
	}
	onChangeHandler = (e) => {
		this.setState({
			text: e.target.value,
		});
		console.log(e.target.value);
	};
	onSubmitHandler = (e) => {
		e.preventDefault();
		console.log(this.state.text);
	};

	render() {
		return (
			<div className='row'>
				<div className='card mt-2 col-md-8 m-auto'>
					<div className='card-head'>
						<h2>Pleas Search the Github User</h2>
					</div>
					<div className='card-body'>
						<form onSubmit={this.onSubmitHandler}>
							<fieldset>
								<div className='form-group'>
									<label htmlFor='search'>User Name</label>
									<input
										type='text'
										className='form-control'
										name='text'
										value={this.state.text}
										onChange={this.onChangeHandler}
									/>
								</div>
								<div className='form-group'>
									<button type='submit' className='btn btn-primary btn-block'>
										Submit
									</button>
								</div>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
