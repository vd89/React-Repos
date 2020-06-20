/** @format */

import React, { Component } from 'react';

export class Search extends Component {
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
	};
	onSubmitHandler = (e) => {
		e.preventDefault();
		console.log(this.state.text);
		this.setState({});
	};

	render() {
		return (
			<div className='row mt-2'>
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
										placeholder='Pleas Enter the User '
									/>
								</div>
								<div className='form-group text-center'>
									<button type='submit' className='btn btn-dark btn-lg mr-5'>
										Submit
									</button>
									<button className='btn-danger btn btn-lg ml-5'>Clear </button>
								</div>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Search;
