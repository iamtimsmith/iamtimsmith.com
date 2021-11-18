(function () {
	// Update theme to light or dark
	function setTheme(theme) {
		window.__THEME = theme;
		// TODO: Update logic
		console.log('Theme Updated to ' + theme);

		if (theme === 'dark') {
			document.documentElement.dataset.theme = 'dark';
		} else {
			document.documentElement.dataset.theme = 'light';
		}
	}

	// Save user preference
	window.__SET_PREFERRED_THEME = function (theme) {
		setTheme(theme);
		try {
			localStorage.setItem('theme', theme);
		} catch (e) {}
	};

	// Is theme in localStorage
	let saved;
	try {
		saved = localStorage.getItem('theme');
	} catch (e) {}

	// Check for preference
	let isDark = window.matchMedia('(prefers-color-scheme: dark)');
	// Set initial theme - setting > os setting > default
	setTheme(saved || (isDark.matches ? 'dark' : 'light'));
})();
