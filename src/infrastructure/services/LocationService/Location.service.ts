import { Alert } from 'react-native';

import { PermissionsService } from '../Permissions';

import { LocationVendor } from './LocationVendor';

import { Coordinates } from '@/domain/models/Coordinates.model';

export namespace LocationService {
  export const getLocation = async (): Promise<Coordinates | undefined> => {
    if (!await PermissionsService.Location.isGranted()) {
      return undefined;
    }

    try {
      const geoData = await LocationVendor.getCurrentPosition();

      return geoData;
    } catch (error) {
      Alert.alert('Something went wrong. Check your geolocation.');
    }

    return undefined;
  };

}
