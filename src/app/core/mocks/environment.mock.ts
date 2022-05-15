import { EnvironmentModel } from '@core/models';

const getDefaults = (): EnvironmentModel => ({
  production: false,
  openWeatherApiKey: 'abcd',
  openWeatherDataApiUrl: 'data-url',
  openWeatherGeoApiUrl: 'geo-url'
});

export const getEnvironmentMock = (env?: Partial<EnvironmentModel>): EnvironmentModel => ({
  ...getDefaults(),
  ...env
});
