import React from 'react';
import Link from 'next/link';
import _ from './posts.module.scss';

export const Posts = ({ content }) => {
	return (
		<ul className={_['posts']}>
			{content.map(post => (
				<li className={_['posts__post']} key={post.title}>
					<strong className={_['posts__post-title']}>
						<Link href={`/blog/${post.slug}`}>
							<a>{post.title}</a>
						</Link>
						{!post.published && <span className='draft'>- Draft</span>}
					</strong>
					<p>{post.description}</p>
				</li>
			))}
		</ul>
	);
};
