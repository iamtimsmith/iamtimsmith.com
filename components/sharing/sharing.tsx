import React, { useEffect, useState } from 'react';
import {
	FaFacebookF,
	FaTwitter,
	FaLinkedin,
	FaPinterest,
	FaEnvelope,
} from 'react-icons/fa';
import config from 'content/config';
import _ from './sharing.module.scss';

export const Sharing = ({ post }) => {
	const url = `${config.siteUrl}/blog/${post.slug}`;
	const image = config.siteUrl + post.image;
	const [showing, setShowing] = useState(false);

	const socials = [
		{
			name: `Facebook`,
			href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
			icon: <FaFacebookF />,
		},
		{
			name: `Twitter`,
			href: `https://twitter.com/share?url=${url}&text=Check out this article!`,
			icon: <FaTwitter />,
		},
		{
			name: `Linkedin`,
			href: `https://www.linkedin.com/shareArticle?mini=true&url=${url}`,
			icon: <FaLinkedin />,
		},
		{
			name: `Pinterest`,
			href: `https://pinterest.com/pin/create/button/?url=${url}&media=${image}&description=${post.title}`,
			icon: <FaPinterest />,
		},
		{
			name: `Email`,
			href: `mailto:?&body=Check%20this%20article%20out!%0A%0A${url}`,
			icon: <FaEnvelope />,
		},
	];

	const handleScroll = () =>
		setShowing(
			window.scrollY > 100 && window.scrollY < document.body.clientHeight - 2000
		);

	useEffect(() => {
		document.addEventListener(`scroll`, handleScroll);
		return () => document.removeEventListener(`scroll`, handleScroll);
	}, []);

	return (
		<aside className={showing ? `${_['sharing']} ${_['show']}` : _['sharing']}>
			<p className={_['sharing__label']}>Share:</p>
			{socials.map(site => (
				<a
					className={_[`sharing__${site.name.toLowerCase()}`]}
					href={site.href}
					target='_parent'
					rel='noreferrer nofollow'
					title={`Share to ${site.name}`}
					aria-label={`Share to ${site.name}`}
					key={site.name}>
					{site.icon}
				</a>
			))}
		</aside>
	);
};
