import React from 'react';
import Link from 'next/link';
import _ from './tags.module.scss';

interface TagsProps {
	tags?: string[];
}

export const Tags = ({ tags = [] }: TagsProps) => {
	return (
		<nav className={_['tags']}>
			<span>Tags: </span>
			{tags.map(tag => (
				<Link href={`/blog/tags/${tag}`} key={tag}>
					<a className={_['tags__tag']}>#{tag}</a>
				</Link>
			))}
		</nav>
	);
};
