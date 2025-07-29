export type WeatherType = 'Thunderstorm' |
  'Drizzle' |
  'Rain' |
  'Snow' |
  'Mist' |
  'Smoke' |
  'Haze' |
  'Dust' |
  'Fog' |
  'Sand' |
  'Ash' |
  'Squall' |
  'Tornado' |
  'Clear' |
  'Clouds';

export interface Weather {
  id: number;
  main: WeatherType;
  description: string;
  icon: string;
}
