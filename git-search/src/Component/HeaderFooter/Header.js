/** @format */

import React from 'react';

function Header() {
	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top'>
				<div className='container'>
					<a href='/' className='navbar-brand'>
						GitHub <i className='fa ml-2 fa-github'></i>
					</a>
				</div>
			</nav>
		</>
	);
}

export default Header;
