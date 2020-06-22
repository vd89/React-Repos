/** @format */
import React, { Component } from 'react';
import Loading from './Loading';

export class User extends Component {
	componentDidMount() {
		this.props.getUser(this.props.match.params.login);
	}

	render() {
		const {
			name,
			avatar_url,
			html_url,
			public_repos,
			public_gists,
			followers,
			company,
			blog,
			location,
			created_at,
			hireable,
		} = this.props.user;
		const { loading } = this.props;
		if (loading) {
			return <Loading />;
		} else {
			return (
				<div className='card card-body mb-3 mt-3'>
					<div className='row'>
						<div className='col-md-3'>
							<img src={avatar_url} alt='' className='img-fluid md-2' />
							<a
								href={html_url}
								className='btn btn-primary btn-block mb-4 mt-2'>
								<h3>{name}</h3>
							</a>
						</div>
						<div className='col-md-9'>
							<span className='badge badge-primary mr-2'>
								<h4>Public Repos: {public_repos}</h4>
							</span>
							<span className='badge badge-secondary mr-2'>
								<h4>Public Gists: {public_gists}</h4>
							</span>
							<span className='badge badge-info bold'>
								<h4>Followers : {followers}</h4>
							</span>
							<br />
							<br />
							<ul className='list-group'>
								{company ? (
									<li className='list-group-item'>Company: {company}</li>
								) : (
									''
								)}
								{blog ? (
									<li className='list-group-item'>Website/Blog: {blog}</li>
								) : (
									''
								)}
								{location ? (
									<li className='list-group-item'>Location: {location}</li>
								) : (
									''
								)}
								{hireable ? (
									<li className='list-group-item'>
										Hireable : {hireable}{' '}
										<i className='fa fa-check text-success' />
									</li>
								) : (
									<i className='fa fa-time-circle text-danger' />
								)}
								<li className='list-group-item'>Member Since: {created_at}</li>
							</ul>
						</div>
					</div>
				</div>
			);
		}
	}
}

export default User;
