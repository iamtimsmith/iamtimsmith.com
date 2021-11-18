import React, { useContext } from 'react';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import { SiteContext } from 'utils/siteContext';
import _ from './toggle.module.scss';

export const Toggle = () => {
	const { toggleTheme } = useContext(SiteContext);

	return (
		<button
			onClick={() => toggleTheme()}
			aria-label='Toggle Theme'
			className={_['toggle']}>
			<IoSunnyOutline className={_['toggle__light']} />
			<IoMoonOutline className={_['toggle__dark']} />
		</button>
	);
};
