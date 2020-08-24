import React from 'react';

import WeatherItem from '../WeatherItem';

import styles from './WeatherList.module.css';

const WeatherList = ({ weather }) => {
	const renderedItems = weather.map(day => {
		return <WeatherItem weather={day} />;
	});
	return <div className={styles.WeatherList}>{renderedItems}</div>;
};

export default WeatherList;
