// export const API_KEY = "Pa7JZTED0ZLwQWUS6Z6qjztB6PWRqz0z";
// export const API_KEY = "Fk9xGUzapojUPsvkosO8AGARxdSrcvpK";
export const API_KEY = "lFl4Kn6NNw0NGaPZkcmZmKiLDAAG4WqV";

export const BASE_API_URL = "http://dataservice.accuweather.com";
export const FAVORITES_LOCALSTORAGE = JSON.parse(localStorage.getItem("favoriteCities") || "[]")
export const DEFAULT_CITY = {
  Version: 1,
  Key: "215854",
  Type: "City",
  Rank: 31,
  LocalizedName: "Tel Aviv",
  Country: {
    ID: "IL",
    LocalizedName: "Israel",
  },
  AdministrativeArea: {
    ID: "TA",
    LocalizedName: "Tel Aviv",
  },
}
