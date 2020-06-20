/** @format */

import React from 'react';
import SingleUser from './SingleUser';

function MultipleUser({ users, loading }) {
	return (
		<div className='mt-2 row row-cols-md-5'>
			{users.map((user) => (
				<div className='col mb-2 ' key={user.id}>
					<SingleUser user={user} />
				</div>
			))}
		</div>
	);
}

export default MultipleUser;
