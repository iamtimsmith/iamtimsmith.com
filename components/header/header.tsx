import React, { useContext } from 'react';
import Link from 'next/link';
import { Toggle } from 'components/toggle';
import { SiteContext } from 'utils/siteContext';
import _ from './header.module.scss';

export const Header = () => {
	const { siteTitle, mainmenu } = useContext(SiteContext);
	return (
		<header className={_['header']}>
			<Link href='/'>
				<a className={_['header__logo']}>{siteTitle}</a>
			</Link>
			<nav className={_['header__nav']}>
				{mainmenu.map(item => (
					<Link href={item.url} key={item.name}>
						<a>{item.name}</a>
					</Link>
				))}
				<Toggle />
			</nav>
		</header>
	);
};
