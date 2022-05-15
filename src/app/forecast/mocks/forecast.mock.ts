import { ForecastModel } from '@forecast/models';
import { getCurrentForecastMock } from './current-forecast.mock';
import { getHourlyForecastMock } from './hourly-forecast.mock';

const getDefaults = (): ForecastModel => ({
  current: getCurrentForecastMock(),
  hourly: [getHourlyForecastMock()]
});

export const getForecastMock = (forecast?: Partial<ForecastModel>): ForecastModel => ({
  ...getDefaults(),
  ...forecast
});
