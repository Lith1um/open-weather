import { LocationModel } from '@forecast/models';

const getDefaults = (): LocationModel => ({
  country: 'GB',
  lat: 51.5073219,
  lon: -0.1276474,
  name: 'London',
  state: 'England',
});

export const getLocationMock = (location?: Partial<LocationModel>): LocationModel => ({
  ...getDefaults(),
  ...location
});
