/** @format */

import React from 'react';
// import PropTypes from 'prop-types';

function SingleUser({ user }) {
	const { avatar_url, html_url, login } = user;
	return (
		<div className='container'>
			<div className='card' style={{ width: '14rem' }}>
				<img src={avatar_url} alt='' className='card-img-top' />
				<div className='card-body'>
					<h3 className='card-title'>{login}</h3>
				</div>
				<div className='card-footer '>
					<a href={html_url} className='btn btn-dark btn-block'>
						Profile
					</a>
				</div>
			</div>
		</div>
	);
}
// SingleUser.PropTypes = {
// 	user: PropTypes.object.isRequired,
// };

export default SingleUser;
