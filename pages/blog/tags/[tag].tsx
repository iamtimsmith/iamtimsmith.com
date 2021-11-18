import React from 'react';
import { Seo } from 'components/seo';
import { Posts } from 'components/posts';
import { getAllContent } from 'utils/contentHelpers';
import config from 'content/config';

const TagPage = ({ tag, posts }) => {
	return (
		<>
			<Seo
				title={`Posts tagged with #${tag}`}
				description={`All of ${config.siteTitle}'s blog posts about ${tag}.`}
			/>
			<h1>Posts tagged with #{tag}</h1>
			<Posts content={posts} />
		</>
	);
};

export default TagPage;

export const getStaticProps = async ({ params }) => {
	const posts = getAllContent('posts', [
		'title',
		'tags',
		'description',
		'slug',
	]);
	return {
		props: {
			tag: params.tag,
			posts: posts.filter(post => post.tags.includes(params.tag)),
		},
	};
};

export const getStaticPaths = () => {
	const posts = getAllContent('posts', ['tags']);
	const tags = [];
	posts.forEach(post => {
		post.tags.forEach(tag => (!tags.includes(tag) ? tags.push(tag) : null));
	});
	return {
		paths: tags.map(tag => ({ params: { tag } })),
		fallback: false,
	};
};
