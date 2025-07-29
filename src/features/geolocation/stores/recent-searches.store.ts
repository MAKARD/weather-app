import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Location } from '@/domain/models/Location.model';

interface RecentSearches {
  items: Array<Location>;

  putItem(location: Location): void;
}

export const useRecentSearches = create<RecentSearches>()(
  persist(
    immer((set) => ({
      items: [],
      putItem: (location) => {
        set((state) => {
          const isAlreadyAdded = !!state.items
            .find((item) => item.lat === location.lat && item.lon === location.lon);

          if (isAlreadyAdded) {
            return;
          }

          state.items.unshift(location);
          state.items = state.items.slice(0, 5);
        });
      }
    })),
    {
      name: 'recent-searches',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
);
