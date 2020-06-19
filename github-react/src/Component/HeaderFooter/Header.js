/** @format */

import React from 'react';

function Header() {
	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
				<a className='navbar-brand' href='/'>
					<h3>
						GitHub
						<i className='fa ml-2 fa-github '></i>
					</h3>
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarColor01'
					aria-controls='navbarColor01'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div className='collapse navbar-collapse container' id='navbarColor01'>
					<ul className='navbar-nav mr-auto'>
						<li className='nav-item active'>
							<a className='nav-link' href='/'>
								Home <span className='sr-only'>(current)</span>
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='/'>
								About
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Header;
