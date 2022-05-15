export interface CurrentForecastModel {

  temp: number;
  humidity: number;
  weather: {
    main: string;
    icon: string;
  }[];

}
