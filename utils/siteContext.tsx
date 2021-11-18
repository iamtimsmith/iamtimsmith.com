import React, { createContext, useState, useEffect } from 'react';
import config from 'content/config';

declare const window: any;

export const SiteContext = createContext({
	...config,
	theme: 'dark',
	toggleTheme: () => {},
});

export const SiteProvider = ({ children }) => {
	const [theme, setTheme] = useState(
		typeof window !== 'undefined' && window.__THEME === 'dark'
			? 'dark'
			: 'light'
	);

	const toggleTheme = () => {
		// Toggle between light and dark
		let newTheme: string = theme === 'light' ? 'dark' : 'light';
		// Update context state
		setTheme(newTheme);
		// Update window object
		window.__SET_PREFERRED_THEME(newTheme);
	};

	useEffect(() => {
		document.querySelector('body').dataset.theme = theme;
	}, [theme]);

	return (
		<SiteContext.Provider value={{ ...config, theme, toggleTheme }}>
			{children}
		</SiteContext.Provider>
	);
};
