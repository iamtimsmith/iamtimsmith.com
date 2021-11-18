import React, { useContext } from 'react';
import { GiTechnoHeart } from 'react-icons/gi';
import { FaTwitter, FaLinkedin, FaGithub, FaDev } from 'react-icons/fa';
import { SiteContext } from 'utils/siteContext';
import _ from './footer.module.scss';

export const Footer = () => {
	const { socialmenu, siteTitle } = useContext(SiteContext);
	const getIcon = (site: string) => {
		switch (site) {
			case 'twitter':
				return <FaTwitter />;
			case 'linkedin':
				return <FaLinkedin />;
			case 'github':
				return <FaGithub />;
			case 'dev':
				return <FaDev />;
			default:
				return null;
		}
	};

	return (
		<footer className={_['footer']}>
			<nav className={_['footer__socials']}>
				{socialmenu.map((social: { name: string; url: string }) => (
					<a
						href={social.url}
						target='_blank'
						rel='noreferrer nofollow'
						aria-label={social.name}
						key={social.name}>
						{getIcon(social.name.toLowerCase())}
					</a>
				))}
			</nav>
			<p>
				&copy; {new Date().getFullYear()}. All rights reserved. Made with{' '}
				<GiTechnoHeart /> by {siteTitle}.
			</p>
		</footer>
	);
};
