import React from 'react';
import Img from 'next/image';
import _ from './image.module.scss';

export const Image = ({ src, alt, width = 500 }) => {
	return (
		<figure className={_['image']}>
			{src.indexOf('://') ? (
				<img src={src} alt={alt} width={width} />
			) : (
				<Img src={src} alt={alt} width={width} />
			)}
			<figcaption>{alt}</figcaption>
		</figure>
	);
};
