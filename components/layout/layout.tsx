import React from 'react';
import { Header } from 'components/header';
import { Footer } from 'components/footer';
import { Socials } from 'components/socials';
import _ from './layout.module.scss';

export const Layout = ({ children }) => {
	return (
		<main className={_['layout']}>
			<Header />
			{children}
			<Footer />
			<Socials />
		</main>
	);
};
