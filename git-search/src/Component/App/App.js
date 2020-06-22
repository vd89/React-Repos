/** @format */

import React, { Component } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';
import Search from '../Search/Search';
import MultipleUser from '../UI/MultipleUser';
import Alert from '../UI/Alert';
import About from '../Pages/About';
import User from '../UI/User';

class App extends Component {
	//Default state
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			loading: false,
			alert: null,
			user: {},
			repos: [],
		};
		this.client_id = 'c5868f39180303a9e8e4';
		this.client_secret = '32735d5e618c1fc35ce25bcc7c44b0472f590a7c';
		this.repos_count = 6;
		this.repos_sort = 'created : asc';
	}
	// Renders first 30 users
	async componentDidMount() {
		this.setState({ loading: true });
		const res = await Axios.get('https://api.github.com/users');
		this.setState({
			users: res.data,
			loading: false,
		});
	}

	//Search user
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

	//Clear USer
	clearUsers = () => {
		this.setState({
			users: [],
		});
	};
	// Set Alert and clear auto
	setAlert = (msg, type) => {
		this.setState({
			alert: { msg, type },
		});
		setTimeout(() => {
			this.setState({
				alert: null,
			});
		}, 2500);
	};

	// Get single user Method
	getUser = async (userName) => {
		this.setState({ loading: true });
		const res = await Axios.get(
			`https://api.github.com/users/${userName}?client_id=${this.client_id}&client_secret=${this.client_secret}`,
		);
		this.setState({
			user: res.data,
			loading: false,
		});
	};
	// Get user Repos
	getUserRepos = async (userName) => {
		this.setState({ loading: true });
		const res = await Axios.get(
			`https://api.github.com/users/${userName}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`,
		);
		this.setState({
			repos: res.data,
			loading: false,
		});
	};

	render() {
		return (
			<Router>
				<Header />
				<div className='container'>
					<Alert alert={this.state.alert} />
					<Switch>
						<Route
							exact
							path='/'
							render={(props) => (
								<>
									<Search
										searchUser={this.searchUser}
										clearUsers={this.clearUsers}
										showClear={this.state.users.length > 0 ? true : false}
										setAlert={this.setAlert}
									/>
									<MultipleUser
										loading={this.state.loading}
										users={this.state.users}
									/>
								</>
							)}
						/>
						<Route exact path='/about' component={About} />
						<Route
							exact
							path='/user/:login'
							render={(props) => (
								<User
									{...props}
									getUser={this.getUser}
									userRepos={this.getUserRepos}
									user={this.state.user}
									loading={this.state.loading}
									repos={this.state.repos}
								/>
							)}
						/>
					</Switch>
				</div>
				<Footer />
			</Router>
		);
	}
}

export default App;
