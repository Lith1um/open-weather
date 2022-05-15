import { CurrentForecastModel } from '@forecast/models';

const getDefaults = (): CurrentForecastModel => ({
  temp: 21,
  humidity: 60,
  weather: [{
    main: 'Clear',
    icon: '01d'
  }]
});

export const getCurrentForecastMock = (currForecast?: Partial<CurrentForecastModel>): CurrentForecastModel => ({
  ...getDefaults(),
  ...currForecast
});
