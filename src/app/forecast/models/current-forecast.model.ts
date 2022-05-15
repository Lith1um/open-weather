export interface CurrentForecastModel {

  temp: string;
  humidity: string;
  weather: {
    main: string;
    icon: string;
  }[];

}
