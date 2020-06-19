/** @format */

import React from 'react';
import PropTypes from 'prop-types';

const SingleUser = ({ user }) => {
	// state = {
	// 	avatar_url: 'https://avatars2.githubusercontent.com/u/34570078?v=4',
	// 	html_url: 'https://github.com/vd89',
	// 	name: 'Dax',
	// 	location: 'india',
	// };

	const { avatar_url, html_url, login } = user;
	return (
		<div className='container'>
			<div className='card'>
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
};
SingleUser.propTypes = {
	user: PropTypes.object.isRequired,
};

export default SingleUser;
