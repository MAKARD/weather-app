import * as React from 'react';
import { Keyboard } from 'react-native';

import { useLocationSearch } from '../../stores/location-search.store';

export interface UseCancelSearchParams {
  onCancelled?: () => void;
}

export const useCancelSearch = ({
  onCancelled
}: UseCancelSearchParams) => {
  const setSearchTerm = useLocationSearch((state) => state.setSearchTerm);
  const clearLocations = useLocationSearch((state) => state.clearLocations);

  const onCancel = React.useCallback(() => {
    clearLocations();
    setSearchTerm('');

    queueMicrotask(() => {
      Keyboard.dismiss();
      onCancelled?.();
    });
  }, [onCancelled]);

  return {
    onCancel
  };
};
