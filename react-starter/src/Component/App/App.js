/** @format */

import React, { Component } from 'react';
import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';
class App extends Component {
	render() {
		return (
			<>
				<Header />
				<div className='container text-center'>
					<h1>This is working</h1>
				</div>
				<Footer />
			</>
		);
	}
}

export default App;
