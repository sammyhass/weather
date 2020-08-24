import React from 'react';

import styles from './WeatherItem.module.css';

import { kToC } from '../../helper/weather';

const TodayWidget = ({ weather }) => {
	return (
		<div className={styles.WeatherItem}>
			<h2>
				{new Date(weather.dt * 1000).toLocaleDateString('en-GB', {
					weekday: 'long',
					day: '2-digit',
					month: 'short',
				})}
			</h2>
			<div className={styles.WidgetContent}>
				<img
					className={styles.WeatherImage}
					src={` http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
					alt="Weather Icon"
				/>
				<p>
					<b>
						{kToC(weather.temp.day)}
						{'\u00B0'}C
					</b>
				</p>
				<p className={styles.WeatherDescription}>{weather.weather[0].main}</p>
				<div className={styles.HighLowContent}>
					<p>
						{kToC(weather.temp.min)}
						{'\u00B0'}C | {kToC(weather.temp.max)}
						{'\u00B0'}C
					</p>
				</div>
			</div>
		</div>
	);
};

export default TodayWidget;
