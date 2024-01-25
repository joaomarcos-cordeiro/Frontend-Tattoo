/* eslint-disable @typescript-eslint/no-explicit-any */
import {  useEffect, useState } from "react"
import { useClienteDataMutate } from "../../../hooks/useClienteDataMutate";
import { ClienteData } from "../../../interface/ClienteData";

import "./modal.css";

interface InputProps {
label: string,
value: string | number,
updateValue(value: any): void
}



interface ModalProps {
    closeModal(): void
}





const Input = ({label, value, updateValue}: InputProps) => {
    return (
        <>
        <label>{label}</label>
        <input value={value} onChange={event =>updateValue(event.target.value)}></input>
        </>
    )
}





export function CreateModal ({closeModal}: ModalProps){
    const[title, setTitle] = useState("");
    const[price, setPrice] = useState(0);
    const[image, setImage] = useState("");
    const {mutate, isSuccess, isPending} = useClienteDataMutate();

    const submit = () => {
        const clienteData: ClienteData = {
            title,
            price,
            image
        }
        mutate(clienteData)
    }

    useEffect (() =>{
      if(!isSuccess)return
      closeModal();
},[isSuccess]);



return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2> Cadastre uma nova tatuagem</h2>
                <form className="input-container">
                    <Input label="Titulo" value={title} updateValue={setTitle} />
                     <Input label="Preço" value={price} updateValue={setPrice}/>
                     <Input label="imagem" value={image} updateValue={setImage} />


                </form>
                <button onClick={submit} className="btn-secondary">
                {isPending ? 'postando...' : 'postar'} 
                </button>
            </div>


        </div>
    )
}