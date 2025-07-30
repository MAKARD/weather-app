import * as React from 'react';

import { usePreviewWeatherInLocation } from './usePreviewWeatherInLocation.controller';

import { SecondaryButton } from '@/ui/components/SecondaryButton';
import { WeatherDetails } from '@/app/views/WeatherDetails';

export const PreviewWeatherInLocation: React.FC = () => {
  const {
    city,
    coordinates,
    canSave,
    goBack,
    addToSavedLocations
  } = usePreviewWeatherInLocation();

  return (
    <WeatherDetails
      coordinates={coordinates}
      city={city}
      Header={(
        <>
          <SecondaryButton color="white" onPress={goBack}>
            {!canSave ? 'Close' : 'Cancel'}
          </SecondaryButton>
          {canSave && (
            <SecondaryButton color="white" onPress={addToSavedLocations}>
              Add
            </SecondaryButton>
          )}
        </>
      )}
    />
  );
};
