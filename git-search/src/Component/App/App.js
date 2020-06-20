/** @format */

import React, { Component } from 'react';
import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';
import Search from './Search/Search';
import Axios from 'axios';
import MultipleUser from '../UI/MultipleUser';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			loading: false,
		};
	}

	async componentDidMount() {
		this.setState({ loading: true });
		const res = await Axios.get('https://api.github.com/users');
		this.setState({
			users: res.data,
			loading: false,
		});
	}

	render() {
		return (
			<>
				<Header />
				<div className='container'>
					<Search />
					<MultipleUser loading={this.state.loading} users={this.state.users} />
				</div>
				<Footer />
			</>
		);
	}
}

export default App;
