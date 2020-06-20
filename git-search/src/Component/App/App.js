/** @format */

import React, { Component } from 'react';
import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';
import Search from './Search/Search';
class App extends Component {
	render() {
		return (
			<>
				<Header />
				<div className='container'>
					<Search />
				</div>
				<Footer />
			</>
		);
	}
}

export default App;
