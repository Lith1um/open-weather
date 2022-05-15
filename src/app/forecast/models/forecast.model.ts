import { CurrentForecastModel } from './current-forecast.model';
import { HourlyForecastModel } from './hourly-forecast.model';

export interface ForecastModel {

  current: CurrentForecastModel;
  hourly: HourlyForecastModel[];

}
