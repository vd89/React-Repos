/** @format */

import React, { Component } from 'react';
import SingleUser from './SingleUser';
import Axios from 'axios';
import Spinner from '../Static/Spinner';

export default class MultipleUsers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			loading: false,
		};
		this.client_id = 'c5868f39180303a9e8e4';
		this.client_secret = '32735d5e618c1fc35ce25bcc7c44b0472f590a7c';
	}
	async componentDidMount() {
		this.setState({ loading: true });
		const res = await Axios.get('https://api.github.com/users');
		this.setState({
			users: res.data,
			loading: false,
		});
	}

	render() {
		if (this.state.loading) {
			return (
				<div className='row m-auto justify-content-center'>
					<Spinner />
				</div>
			);
		} else {
			return (
				<div className='mt-2 row row-cols-md-5'>
					{this.state.users.map((user) => (
						<div className='col mb-2'>
							<SingleUser key={user.id} user={user} />
						</div>
					))}
				</div>
			);
		}
	}
}
