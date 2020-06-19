/** @format */
import React, { Component } from 'react';
import Layout from '../Layout.js/Layout';
import Search from '../Search/Search';
import MultipleUsers from '../UI/MultipleUsers';

export default class App extends Component {
	render() {
		return (
			<Layout>
				<div className='container'>
					<Search />
					<MultipleUsers />
				</div>
			</Layout>
		);
	}
}
