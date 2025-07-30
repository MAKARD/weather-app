import * as React from 'react';

import { SearchInput } from '../../components/SearchInput';

import { useLocationsSearchInput } from './useLocationsSearchInput.controller';

export const LocationsSearchInput: React.FC<{}> = () => {
  const {
    onChange,
    onFocus,
    onBlur,
    isSearching,
    value
  } = useLocationsSearchInput();

  return (
    <SearchInput
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      isSearching={isSearching}
      value={value}
    />
  );
};
