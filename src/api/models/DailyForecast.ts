export interface DailyForecast {
    Date: string;
    EpochDate: number;
    Temperature: Temperature;
    Day: Day;
    Night: Day;
    Sources: string[];
    MobileLink: string;
    Link: string;
}

export interface Day {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
}

export interface Temperature {
    Minimum: Imum;
    Maximum: Imum;
}

export interface Imum {
    Value: number;
    Unit: string;
    UnitType: number;
}
