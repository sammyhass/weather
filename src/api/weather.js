import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.openweathermap.org/data/2.5',
	params: {
		appid: 'e137d001fec7011c14941a1179199188',
	},
});
