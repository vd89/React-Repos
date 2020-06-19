/** @format */

import React, { Component } from 'react';

export default class SingleUser extends Component {
	state = {
		avatar_url: 'https://avatars2.githubusercontent.com/u/34570078?v=4',
		html_url: 'https://github.com/vd89',
		name: 'Dax',
		location: 'india',
	};
	render() {
		return (
			<div className='container'>
				<div className='card'>
					<img src={this.state.avatar_url} alt='' className='card-img-top' />
					<div className='card-body'>
						<h3 className='card-title'>{this.state.name}</h3>
						<p className='card-text'>{this.state.location.toUpperCase()}</p>
					</div>
					<div className='card-footer '>
						<a href={this.state.html_url} className='btn btn-dark btn-block'>
							{' '}
							Profile
						</a>
					</div>
				</div>
			</div>
		);
	}
}
