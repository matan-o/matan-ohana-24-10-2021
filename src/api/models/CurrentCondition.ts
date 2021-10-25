export interface CurrentCondition {
    LocalObservationDateTime: string;
    EpochTime: number;
    WeatherText: string;
    WeatherIcon: number;
    HasPrecipitation: boolean;
    PrecipitationType: null;
    IsDayTime: boolean;
    Temperature: Temperature;
    MobileLink: string;
    Link: string;
}

export interface Temperature {
    Metric: Imperial;
    Imperial: Imperial;
}

export interface Imperial {
    Value: number;
    Unit: string;
    UnitType: number;
}
