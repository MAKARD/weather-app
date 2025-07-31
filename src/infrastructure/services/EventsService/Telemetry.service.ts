import { EventEmitter } from 'eventemitter3';

import { EventsService } from './Events.service';

interface Events {
  'app:error': {
    originalError: unknown;
    context: string;
    details?: Record<string, string>;
  };
}

export const TelemetryService = new EventsService<Events>(new EventEmitter());
