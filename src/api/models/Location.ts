export interface Location {
    Version: number;
    Key: string;
    Type: string;
    Rank: number;
    LocalizedName: string;
    Country: AdministrativeArea;
    AdministrativeArea: AdministrativeArea;
}

export interface AdministrativeArea {
    ID: string;
    LocalizedName: string;
}
