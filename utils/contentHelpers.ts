import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

/**
 * Get slugs without dates for content
 * @param type string - directory in content folder
 * @returns array of slugs
 */
export const getContentSlugs = (type: string = 'posts') => {
	const directory = join(process.cwd(), 'content', type);
	const files = fs.readdirSync(directory);
	// Handle files with date in filename
	return files.map(file =>
		file.indexOf(`---`) >= 0
			? file.replace(/(\d{4}-\d{2}-\d{2}---)/i, ``)
			: file
	);
};

/**
 * Retrieves a given markdown file by slug
 * @param type string - directory in content folder
 * @param slug string - slug to find in filename
 * @param fields array - fields to retrieve
 * @returns object containing post data for requested fields
 */
export const getContentBySlug = (
	type: string = 'posts',
	slug: string,
	fields: string[] = []
) => {
	// Create path for directory
	const directory = join(process.cwd(), 'content', type);
	// Remove extension from provided slug
	const realSlug = slug.replace(/\.md$/, '');
	// Get markdown filename from slug
	const filename = fs
		.readdirSync(directory)
		.filter(file => file.includes(slug))[0];
	// Create full path with filename
	const fullPath = join(directory, filename);
	// Read Contents of file
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content } = matter(fileContents);

	const items: { [key: string]: any } = {};

	// Ensure only the minimal needed data is exposed
	fields.forEach((field: string) => {
		if (field === 'slug') {
			items[field] = realSlug;
		}
		if (field === 'content') {
			items[field] = content;
		}

		if (field === 'date') {
			const index = filename.indexOf('---');
			items[field] = index > 0 ? filename.substr(0, index) : null;
		}

		if (typeof data[field] !== 'undefined') {
			items[field] = data[field];
		}
	});

	return items;
};

/**
 * Get multiple items from content
 * @param type string - directory in content folder
 * @param fields array - fields to retrieve
 * @param count number - items per page
 * @param offset number - items to skip
 * @returns array of posts with requested fields
 */
export const getAllContent = (
	type: string = 'posts',
	fields: string[] = [],
	count?: number,
	offset: number = 0
) => {
	const isDevEnvironment = process.env.NODE_ENV !== 'production';
	const slugs = getContentSlugs(type);
	let posts = slugs
		.map(slug => getContentBySlug(type, slug, [...fields, 'published']))
		// only return posts which are published unless in development
		.filter(post => isDevEnvironment || post.published === true)
		// sort posts by date in descending order
		.sort((post1, post2) => (post1.date > post2.date ? 1 : -1));
	// Add a numeric ID to post for pagination
	posts = posts.map((post, id) => ({ ...post, id: id }));

	return count
		? posts.filter(post => post.id >= offset && post.id < offset + count)
		: posts;
};
