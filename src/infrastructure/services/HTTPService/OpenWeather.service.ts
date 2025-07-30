import Axios from 'axios';
import { OPEN_WEATHER_API_KEY, OPEN_WEATHER_URL } from 'react-native-dotenv';

import { HTTPService } from './HTTP.service';

const axiosInstance = Axios.create();

export const OpenWeatherService = new HTTPService({
  request: (path, method, body, params) => {
    return axiosInstance.request({
      method,
      url: path,
      data: body,
      params: {
        ...params,
        appid: OPEN_WEATHER_API_KEY
      }
    }).then((response) => response.data);
  }
}, OPEN_WEATHER_URL);
