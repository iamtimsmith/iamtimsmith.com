module.exports = {
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.plugins = [
			...config.plugins,
			new webpack.IgnorePlugin({
				resourceRegExp: /canvas/,
				contextRegExp: /jsdom$/,
			}),
		];
		// Important: return the modified config
		return config;
	},
};
