/** @format */

import React from 'react';
import Header from '../App/HeaderFooter/Header';
import Footer from '../App/HeaderFooter/Footer';

export default function Layout(props) {
	return (
		<div>
			<Header />
			{props.children}
			<Footer />
		</div>
	);
}
