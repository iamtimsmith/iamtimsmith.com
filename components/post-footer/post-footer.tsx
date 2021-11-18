import React from 'react';
import { Bio } from 'components/bio';
import { Seo } from 'components/seo';
import { Tags } from 'components/tags';
import { Sharing } from 'components/sharing';

export const PostFooter = ({ data }) => {
	return (
		<footer>
			<Seo
				title={data.title}
				description={data.description}
				image={data.image}
			/>
			<Bio showAuthorName />
			{data.tags && (
				<>
					<Tags tags={data.tags} />
					<Sharing post={data} />
				</>
			)}
		</footer>
	);
};
