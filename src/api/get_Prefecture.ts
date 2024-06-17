import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Prefecture } from '../models/Prefecture';

//const API_KEY:string | undefined=process.env.API_KEY;
const API_KEY:string | undefined= process.env.API_KEY;
const BASE_URL=process.env.BASE_URL;



export async function fetchPrefecture ():Promise<Prefecture[]>{
    if (!API_KEY) {
        throw new Error("API_KEY is not defined");
    }
      
      if (!BASE_URL) {
        throw new Error("BASE_URL is not defined");
    }
    try{
        const option: AxiosRequestConfig ={
            url: 'api/v1/prefectures',
            baseURL: BASE_URL,
            headers:{
                'Content-Type': 'application/json',
                'X-API-KEY': API_KEY
                
            }
        };
        const response: AxiosResponse<Prefecture[]> = await axios.request(option);
        console.log(response.data);
        if (response.data.length > 0) {
            return response.data;
          } else {
            throw new Error("No prefectures found");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          throw new Error("Failed to fetch prefecture");
        }
}



