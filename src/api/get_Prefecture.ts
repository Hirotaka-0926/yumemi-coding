import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Prefecture } from '../models/Prefecture';

//const API_KEY:string | undefined=process.env.API_KEY;
const API_KEY:string ='iRA3bSO39WqHMFINak51SfOIv2dJar7SeboigCvm';
//const BASE_URL=process.env.BASE_URL;
const BASE_URL='https://opendata.resas-portal.go.jp';


async function getPrefecture(){
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
        const response= await axios(option);
        console.log(response.data);
    }
    catch(error){
        console.error("Error fetching data:", error);
    }
}


async function getPopulation(prefCode: number, cityCode: string){
    if (!API_KEY) {
        throw new Error("API_KEY is not defined");
      }
      
      if (!BASE_URL) {
        throw new Error("BASE_URL is not defined");
      }
    try{
        const option: AxiosRequestConfig ={
            url: 'api/v1/population/composition/perYear',
            baseURL: BASE_URL,
            headers:{'X-API_KEY': API_KEY},
            params:{
                prefCode:prefCode,
                cityCode:cityCode
            }
        };
        const response= await axios(option).then((res: AxiosResponse<Prefecture[]>)=>{
            console.log(response);
            
        });
        
        return response

    }
    catch(error){
        console.error("Error fetching data:", error);
    }
}
