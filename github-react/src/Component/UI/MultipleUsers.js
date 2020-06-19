/** @format */

import React, { Component } from 'react';
import SingleUser from './SingleUser';

export default class MultipleUsers extends Component {
	state = {
		users: [
			{
				avatar_url: 'https://avatars2.githubusercontent.com/u/34570078?v=4',
				html_url: 'https://github.com/vd89',
				name: 'Dax',
				location: 'india',
			},
			{
				avatar_url: 'https://avatars0.githubusercontent.com/u/39377668?v=4',
				html_url: 'https://github.com/ip11',
				name: 'prashanth',
				location: 'Hyderabad',
			},
			{
				avatar_url: 'https://avatars2.githubusercontent.com/u/34570078?v=4',
				html_url: 'https://github.com/vd89',
				name: 'Dax',
				location: 'india',
			},
			{
				avatar_url: 'https://avatars0.githubusercontent.com/u/39377668?v=4',
				html_url: 'https://github.com/ip11',
				name: 'prashanth',
				location: 'Hyderabad',
			},
		],
	};
	render() {
		return (
			<div className='mt-2 row row-cols-md-3'>
				{this.state.users.map((user) => (
					<div className='col mb-4'>
						<SingleUser key={user.id} user={user} />
					</div>
				))}
			</div>
		);
	}
}
