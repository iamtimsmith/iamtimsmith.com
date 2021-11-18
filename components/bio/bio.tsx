import React, { useContext } from 'react';
import Img from 'next/image';
import { SiteContext } from 'utils/siteContext';
import _ from './bio.module.scss';

export const Bio = ({ showAuthorName = false }) => {
	const { author } = useContext(SiteContext);

	return (
		<section
			className={`${_['bio']} ${showAuthorName ? _['bio--author'] : ''}`}>
			<Img
				src={author.image}
				className={_['bio__image']}
				alt={author.name}
				width={100}
				height={100}
			/>
			<div className={_['bio__content']}>
				{showAuthorName && (
					<p className={_['bio__author']}>Written by {author.name}</p>
				)}
				<p dangerouslySetInnerHTML={{ __html: author.description }} />
			</div>
		</section>
	);
};
