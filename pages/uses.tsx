import React from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { Seo } from 'components/seo';
import { getContentBySlug } from 'utils/contentHelpers';

const PageNotFound = ({ page }) => {
	return (
		<>
			<Seo title={page.title} description={page.description} />
			<h1>{page.title}</h1>
			<MDXRemote {...page.content} />
		</>
	);
};

export default PageNotFound;

export const getStaticProps = async () => {
	// Get Page Content
	const page = getContentBySlug('pages', 'uses', [
		'title',
		'description',
		'content',
	]);
	page.content = await serialize(page.content);

	return {
		props: {
			page,
		},
	};
};
