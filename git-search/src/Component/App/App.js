/** @format */

import React, { Component } from 'react';
import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';
import Search from '../Search/Search';
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
	searchUser = async (text) => {
		this.setState({ loading: true });
		const res = await Axios.get(
			`https://api.github.com/search/users?q=${text}`,
		);
		this.setState({
			users: res.data.items,
			loading: false,
		});
	};
	clearUsers = () => {
		this.setState({
			users: [],
		});
	};

	render() {
		return (
			<>
				<Header />
				<div className='container'>
					<Search
						searchUser={this.searchUser}
						clearUsers={this.clearUsers}
						showClear={this.state.users.length > 0 ? true : false}
					/>
					<MultipleUser loading={this.state.loading} users={this.state.users} />
				</div>
				<Footer />
			</>
		);
	}
}

export default App;
