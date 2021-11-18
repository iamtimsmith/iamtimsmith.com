import React, { useEffect, useState } from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaDev } from 'react-icons/fa';
import config from 'content/config';
import _ from './socials.module.scss';

export const Socials = () => {
	const [show, setShow] = useState(false);

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

	const handleShow = () => setShow(window.scrollY > 0);
	const handleClick = () => window[`scrollTo`]({ top: 0, behavior: `smooth` });

	useEffect(() => {
		document.addEventListener(`scroll`, handleShow);
		return () => document.removeEventListener(`scroll`, handleShow);
	}, []);

	return (
		<aside className={_['socials']}>
			<nav className={_['socials__nav']}>
				<button className={show ? _['show'] : ''} onClick={() => handleClick()}>
					&uarr;
				</button>
				{config.socialmenu.map((social: { url: string; name: string }) => (
					<a
						href={social.url}
						target='_blank'
						rel='noreferrer nofollow'
						key={social.name}>
						{getIcon(social.name.toLowerCase())}
					</a>
				))}
			</nav>
		</aside>
	);
};
