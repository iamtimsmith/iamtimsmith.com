import React from 'react';
import Link from 'next/link';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { Bio } from 'components/bio';
import { Posts } from 'components/posts';
import { Seo } from 'components/seo';
import { getAllContent, getContentBySlug } from 'utils/contentHelpers';
import config from 'content/config';

const HomePage = ({ page, posts }) => {
	return (
		<>
			<Seo title={page.title} description={page.description} />
			<MDXRemote {...page.content} components={{ Bio }} />
			<h2>Recent Posts</h2>
			<Posts content={posts} />
			<Link href='/blog'>
				<a>View more posts →</a>
			</Link>
		</>
	);
};

export default HomePage;

export const getStaticProps = async () => {
	// Get Page Content
	const page = getContentBySlug('pages', 'home', [
		'title',
		'description',
		'content',
	]);
	page.content = await serialize(page.content);
	// Get Blog Posts
	const posts = getAllContent(
		'posts',
		['title', 'slug', 'description'],
		config.postsPerPage
	);

	return {
		props: {
			page,
			posts,
		},
	};
};
