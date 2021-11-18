import React from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { Posts } from 'components/posts';
import { Pagination } from 'components/pagination';
import { PostFooter } from 'components/post-footer';
import { Gif } from 'components/gif';
import { Seo } from 'components/seo';
import { Image } from 'components/image';
import { EmailSignup } from 'components/email-signup';
import { getContentBySlug, getAllContent } from 'utils/contentHelpers';
import remarkUnwrapImages from 'remark-unwrap-images';
import config from 'content/config';

const BlogPost = ({
	post = null,
	posts = [],
	totalPages = null,
	page = null,
}) => {
	{
		/* Individual Post */
	}
	if (post)
		return (
			<>
				<h1>
					{post.title}
					{!post.published && <span className='draft'>- Draft</span>}
				</h1>
				<MDXRemote
					{...post.content}
					components={{ Gif, EmailSignup, Seo, img: Image }}
				/>
				<PostFooter data={post} />
			</>
		);

	{
		/* Paginated blog page */
	}
	if (posts)
		return (
			<>
				<h1>Blog</h1>
				<Posts content={posts} />
				<Pagination page={page} totalPages={totalPages} />
			</>
		);
};

export default BlogPost;

export const getStaticProps = async ({ params }) => {
	// If page is a paginated blog page
	if (!isNaN(params.slug)) {
		const totalPages = Math.ceil(
			getAllContent('posts', []).length / config.postsPerPage
		);
		const posts = getAllContent(
			'posts',
			['title', 'slug', 'description', 'published'],
			config.postsPerPage,
			(parseInt(params.slug) - 1) * config.postsPerPage
		);
		return {
			props: {
				posts,
				totalPages,
				page: parseInt(params.slug),
			},
		};
	}
	// If blog post, render normally
	else {
		const post = getContentBySlug('posts', params.slug, [
			'title',
			'slug',
			'image',
			'content',
			'published',
			'tags',
			'description',
		]);
		post.content = await serialize(post.content, {
			mdxOptions: {
				remarkPlugins: [require('remark-prism'), remarkUnwrapImages],
			},
		});

		return {
			props: {
				post,
			},
		};
	}
};

export const getStaticPaths = async () => {
	// Get all posts
	const posts = getAllContent('posts', ['slug']);
	const pageCount = Math.ceil(posts.length / config.postsPerPage);
	const pages = [];
	for (let i = 1; i < pageCount; i++) pages.push(i);

	return {
		paths: [
			// Create individual blog posts
			...posts.map(post => ({ params: { slug: post.slug } })),
			// Create pages for paginated blog posts
			...pages.map(page => ({ params: { slug: `${page + 1}` } })),
		],
		fallback: false,
	};
};
