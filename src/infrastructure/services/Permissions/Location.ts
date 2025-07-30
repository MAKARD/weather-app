import { Platform } from 'react-native';
import * as Permissions from 'react-native-permissions';
import ReactNativeInfo from 'react-native-device-info';

export namespace Location {
  enum Level {
    foreground = 'foreground',
  }

  export async function isGranted(level: keyof typeof Level = Level.foreground) {
    if (!await ReactNativeInfo.isLocationEnabled()) {
      return false;
    }

    if (Platform.OS === 'ios') {
      const permission = {
        [Level.foreground]: Permissions.PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
      }[level];

      const result = await Permissions.check(permission);

      return result === Permissions.RESULTS.GRANTED;
    }

    if (Platform.OS === 'android') {
      const permission = {
        [Level.foreground]: Permissions.PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
      }[level];

      const result = await Permissions.check(permission);

      return result === Permissions.RESULTS.GRANTED;
    }

    return false;
  }

  export async function request() {
    if (!await ReactNativeInfo.isLocationEnabled()) {

      return false;
    }

    if (Platform.OS === 'ios') {
      const initialPermission = await Permissions.check(Permissions.PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

      if (initialPermission === Permissions.RESULTS.BLOCKED) {
        return false;
      }

      const basePermission = await Permissions.request(Permissions.PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

      const isPermissionGranted = basePermission === Permissions.RESULTS.GRANTED;

      return isPermissionGranted;
    }

    if (Platform.OS === 'android') {
      const initialPermission = await Permissions.check(Permissions.PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      const basePermission = await Permissions.request(Permissions.PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

      if (initialPermission === Permissions.RESULTS.DENIED && basePermission === Permissions.RESULTS.BLOCKED) {

        return false;
      }

      const isBasePermissionGranted = basePermission === Permissions.RESULTS.GRANTED;

      return isBasePermissionGranted;
    }

    return false;
  }
}
