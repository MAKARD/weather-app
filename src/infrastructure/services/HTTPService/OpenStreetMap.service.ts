import Axios from 'axios';
import { OPEN_STREET_MAP_URL } from 'react-native-dotenv';

import { HTTPService } from './HTTP.service';

const axiosInstance = Axios.create();

export const OpenStreetMapService = new HTTPService({
  request: (path, method, body, params) => {
    return axiosInstance.request({
      method,
      url: path,
      data: body,
      params
    }).then((response) => response.data);
  }
}, OPEN_STREET_MAP_URL);
