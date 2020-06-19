/** @format */

import React from 'react';
import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';

export default function Layout(props) {
	return (
		<div>
			<Header />
			{props.children}
			<Footer />
		</div>
	);
}
