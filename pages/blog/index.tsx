import React from 'react';
import Link from 'next/link';
import { Posts } from 'components/posts';
import { Pagination } from 'components/pagination';
import { getAllContent } from 'utils/contentHelpers';
import config from 'content/config';

const BlogPage = ({ posts, page, totalPages }) => {
	return (
		<>
			<h1>Blog</h1>
			<Posts content={posts} />
			<Pagination page={page} totalPages={totalPages} />
		</>
	);
};

export default BlogPage;

export const getStaticProps = async () => {
	const totalPages = Math.ceil(
		getAllContent('posts', []).length / config.postsPerPage
	);
	const posts = getAllContent(
		'posts',
		['title', 'slug', 'description'],
		config.postsPerPage
	);
	return {
		props: {
			posts,
			totalPages,
			page: 1,
		},
	};
};
