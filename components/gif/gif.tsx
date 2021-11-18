import React from 'react';
import _ from './gif.module.scss';

interface GifProps {
	src: string;
	alt: string;
	width: string | number;
}

export const Gif = ({ src, alt, width = 400 }: GifProps) => {
	return (
		<figure className={_['gif']}>
			<video src={src} width={width} autoPlay loop playsInline muted />
			{alt && <figcaption>{alt}</figcaption>}
		</figure>
	);
};
