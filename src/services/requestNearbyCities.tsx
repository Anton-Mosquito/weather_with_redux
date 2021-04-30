import { ICoords } from "../models/coords.model";
import { IDataCity } from "../models/dataCity.model";

const API_key = '44b788430b6eae4f49d10064566fc911';
const URL =  'https://api.openweathermap.org/data/2.5/find?';

const delay = (ms: number) => {
  return new Promise((resolve: any) => setTimeout(() => resolve(), ms));
};

export default async function getNearbyCities(coords : ICoords) :Promise<IDataCity | undefined>{
    let result;
      try {
        await delay(3000);
        const response = await fetch(`${URL}lat=${coords.lat}&lon=${coords.lon}&cnt=${9}&units=metric&appid=${API_key}`);
        const data = await response.json();
        result = data;
        return result
        } catch (e) {
          console.error(e);
        }
}