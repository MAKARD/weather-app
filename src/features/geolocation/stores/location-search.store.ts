import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { HTTPService } from '@/infrastructure/services/HTTPService';
import { Location } from '@/domain/models/Location.model';
import { SearchLocation } from '@/domain/apis/geolocation.api';

const getLocationsList = HTTPService
  .createRequest<SearchLocation.ResponseDTO, {}, SearchLocation.QueryDTO>(SearchLocation.api);

interface LocationsSearchStore {
  locations: Array<Location>;
  isSearching: boolean;
  searchTerm: string;

  setSearchTerm(searchTerm: string): void;
  clearLocations(): void;
  fetchLocations(): Promise<void>;
}

export const useLocationSearch = create<LocationsSearchStore>()(immer((set, get) => ({
  locations: [],
  searchTerm: '',
  isSearching: false,
  clearLocations: () => {
    set({
      locations: []
    });
  },
  setSearchTerm: (searchTerm) => {
    set({
      searchTerm
    });
  },
  fetchLocations: async () => {
    const { searchTerm } = get();

    set({ isSearching: true });

    const locations = await getLocationsList({
      queryParams: {
        q: searchTerm,
        limit: 5
      }
    });

    set({ locations, isSearching: false });
  }
})));
