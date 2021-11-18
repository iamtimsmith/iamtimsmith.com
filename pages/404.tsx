import React from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { Seo } from 'components/seo';
import { Posts } from 'components/posts';
import { getContentBySlug, getAllContent } from 'utils/contentHelpers';

const PageNotFound = ({ page, posts }) => {
	return (
		<>
			<Seo title={page.title} description={page.description} />
			<h1>{page.title}</h1>
			<MDXRemote {...page.content} />
			<br />
			<Posts content={posts} />
		</>
	);
};

export default PageNotFound;

export const getStaticProps = async () => {
	// Get Page Content
	const page = getContentBySlug('pages', '404', [
		'title',
		'description',
		'content',
	]);
	page.content = await serialize(page.content);
	// Get Blog Posts
	const posts = getAllContent('posts', ['title', 'slug', 'description'], 3);

	return {
		props: {
			page,
			posts,
		},
	};
};
