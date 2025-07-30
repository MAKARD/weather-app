import { Linking, Platform } from 'react-native';
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

  export const openSettings = () => {
    Platform.select({
      android: () => Linking.sendIntent('android.settings.LOCATION_SOURCE_SETTINGS'),
      // cSpell:disable-next-line
      ios: () => Linking.openURL('App-Prefs:Privacy&path=LOCATION'),
      default: () => {}
    })();
  };

  export async function request() {
    if (!await ReactNativeInfo.isLocationEnabled()) {
      openSettings();

      return false;
    }

    if (Platform.OS === 'ios') {
      const initialPermission = await Permissions.check(Permissions.PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

      if (initialPermission === Permissions.RESULTS.BLOCKED) {
        Linking.openSettings();

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
        Linking.openSettings();

        return false;
      }

      const isBasePermissionGranted = basePermission === Permissions.RESULTS.GRANTED;

      return isBasePermissionGranted;
    }

    return false;
  }
}
