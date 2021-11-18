import React from 'react';
import Link from 'next/link';
import _ from './pagination.module.scss';

export const Pagination = ({ page, totalPages }) => {
	return (
		<nav className={_['pagination']}>
			{(page === 1 && <span>&larr; Previous</span>) || (
				<Link href={`/blog/${page - 1 > 1 ? page - 1 : ``}`}>
					<a>&larr; Previous</a>
				</Link>
			)}
			<p>
				Page {page} / {totalPages}
			</p>
			{(page === totalPages && <span>&rarr; Next</span>) || (
				<Link href={`/blog/${page + 1}`}>
					<a>Next &rarr;</a>
				</Link>
			)}
		</nav>
	);
};
