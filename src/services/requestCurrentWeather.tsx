import { ICoords } from "../models/coords.model";
import IDataPosition from "../models/dataPosition.model";

const API_key = '44b788430b6eae4f49d10064566fc911';
const URL =  'https://api.openweathermap.org/data/2.5/weather?';

const delay = (ms: number) => {
  return new Promise((resolve: any) => setTimeout(() => resolve(), ms));
};

export default async function getWeather(coords : ICoords): Promise<IDataPosition | undefined>{   
  let result;
    try {
      await delay(3000);
      const response = await fetch(`${URL}lat=${coords.lat}&lon=${coords.lon}&units=metric&APPID=${API_key}`);
      const data = await response.json();
      result = data;
      return result;
      } catch (e) {
        console.error(e);
      }
}



