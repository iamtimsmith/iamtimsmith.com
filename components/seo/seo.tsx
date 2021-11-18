import React from 'react';
import Head from 'next/head';
import config from 'content/config';

export const Seo = ({ title, description, image = config.siteImage }) => {
	return (
		<Head>
			{/* prettier-ignore */}
			<title>{title} | {config.siteTitle}</title>
			<meta name='description' content={description} />
			<meta name='og:title' content={title} />
			<meta name='og:description' content={description} />
			<meta name='og:type' content='website' />
			<meta name='og:image' content={config.siteUrl + image} />
			<meta name='twitter:card' content='summary' />
			<meta name='twitter:creator' content={config.author.twitter} />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:image' content={config.siteUrl + image} />
		</Head>
	);
};
