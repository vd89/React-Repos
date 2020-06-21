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

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			loading: false,
			alert: null,
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
					</Switch>
				</div>
				<Footer />
			</Router>
		);
	}
}

export default App;
