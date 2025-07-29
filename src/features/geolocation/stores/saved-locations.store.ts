import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Location } from '@/domain/models/Location.model';
import { Weather } from '@/domain/models/Weather.model';
import { Conditions } from '@/domain/models/Conditions.model';

interface LastKnownWeather {
    weather: Weather;
    conditions: Conditions;
}

interface SavedLocation extends Location {
  lastKnownWeather: LastKnownWeather;
}

interface SavedLocations {
  items: Array<SavedLocation>;

  putItem(location: SavedLocation): void;
}

// AsyncStorage.getAllKeys().then((keys) => AsyncStorage.multiRemove(keys));
export const useSavedLocations = create<SavedLocations>()(
  persist(
    immer((set) => ({
      items: [],
      putItem: (location) => {
        set((state) => {
          const item = state.items
            .find((entry) => entry.lat === location.lat && entry.lon === location.lon);

          if (item) {
            item.lastKnownWeather = location.lastKnownWeather;

            return;
          }

          state.items.push({
            ...location
          });
        });
      }
    })),
    {
      name: 'saved-locations',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
);
