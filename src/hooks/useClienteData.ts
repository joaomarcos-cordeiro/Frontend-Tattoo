import { useQuery } from "@tanstack/react-query";
import { ClienteData } from './../interface/ClienteData';
import axios, { AxiosPromise } from "axios" 

const API_URL = "http://localhost:9999";


const fetchData = async (): AxiosPromise <ClienteData []> => {
    const response = axios.get(API_URL +'/cliente');
    return response;
}
export function useClienteData(){
 const query = useQuery({
    queryFn: fetchData,
    queryKey: ['cliente-data'],
    retry: 2 
 })
 return{
    ...query,
    data: query.data?.data
 }
}