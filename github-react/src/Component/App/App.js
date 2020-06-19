/** @format */
import React, { Component } from 'react';
import Layout from '../Layout.js/Layout';
import Search from '../Search/Search';
import Axios from 'axios';
import SingleUser from '../UI/SingleUser';

export default class App extends Component {
	render() {
		return (
			<Layout>
				<div className='container'>
					<Search />
					<h1>This is working</h1>
					<SingleUser />
				</div>
			</Layout>
		);
	}
}
