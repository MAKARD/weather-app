import * as React from 'react';

import { Navigation } from './navigation';

import { TelemetryService } from '@/infrastructure/services/EventsService';

export const App: React.FC = () => {
  React.useEffect(() => {
    const removeListener = TelemetryService.addListener('app:error', (error) => {
      // Report to external services
      console.error(error.originalError);
      console.debug(error);
    });

    return () => {
      removeListener();
    };
  }, []);

  return (
    <Navigation />
  );
};
