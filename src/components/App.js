import React, { useState, useEffect } from 'react';
import Header from './Header';

import styles from './App.module.css';
import weatherAPI from '../api/weather';

import WeatherList from './WeatherList';

const App = () => {
	const [pos, setPos] = useState(null);
	const [weather, setWeather] = useState(null);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(({ coords }) =>
			setPos({ lat: coords.latitude, lon: coords.longitude })
		);
	}, []);

	useEffect(() => {
		if (!pos) {
			return;
		}
		const getWeather = async () => {
			const response = await weatherAPI.get('/onecall', {
				params: {
					lat: pos.lat,
					lon: pos.lon,
				},
			});

			setWeather(response.data.daily);
		};

		getWeather();
	}, [pos]);

	if (!pos || !weather) {
		return <div>Loading</div>;
	}

	return (
		<div className={styles.App}>
			<Header />
			<WeatherList weather={weather} />
		</div>
	);
};

export default App;
