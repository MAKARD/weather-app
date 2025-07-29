import * as React from 'react';

import { SearchInput } from '../../components/SearchInput';

import { useLocationsSearchInput, UseLocationsSearchInputParams } from './useLocationsSearchInput.controller';

interface Props extends UseLocationsSearchInputParams {}

export const LocationsSearchInput: React.FC<Props> = ({
  onSearch
}) => {
  const {
    onChange,
    onFocus,
    onBlur,
    isSearching,
    value
  } = useLocationsSearchInput({ onSearch });

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
