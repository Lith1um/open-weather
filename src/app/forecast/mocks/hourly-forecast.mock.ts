import { HourlyForecastModel } from '@forecast/models';

const getDefaults = (): HourlyForecastModel => ({
  pop: 0.5
});

export const getHourlyForecastMock = (hourlyForecast?: Partial<HourlyForecastModel>): HourlyForecastModel => ({
  ...getDefaults(),
  ...hourlyForecast
});
