import React from 'react';
import Script from 'next/script';
import { Layout } from 'components/layout';
import { SiteProvider } from 'utils/siteContext';
import { Seo } from 'components/seo';
import 'prismjs/themes/prism.css';
import 'styles/app.scss';

const MyApp = ({ Component, pageProps }) => {
	return (
		<SiteProvider>
			<Script src='/handleThemes.js' strategy='beforeInteractive' />
			{/* <Script src='/handlePrism.js' strategy='beforeInteractive' /> */}
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SiteProvider>
	);
};

export default MyApp;
