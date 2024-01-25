
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation ,useQueryClient } from "@tanstack/react-query";
import { ClienteData } from './../interface/ClienteData';
import axios, { AxiosPromise } from "axios" 

const API_URL = "http://localhost:8080";



const postData = async (data: ClienteData): AxiosPromise<any> => {
    const response = axios.post(API_URL +'/cliente', data);
    return response;
}
export function useClienteDataMutate(){
 const queryClient = useQueryClient();
    const mutate = useMutation({
    mutationFn: postData,
     retry: 2 ,
     onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['cliente-data'] })

     }
 })
 return mutate;
}