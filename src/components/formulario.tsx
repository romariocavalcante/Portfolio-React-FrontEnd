import { useState } from "react";
import Cliente from "../core/Client";
import Botao from "./botao";
import Entrada from "./entrada";

interface FormularioProps{
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void

}

export default function Formulario(props : FormularioProps){
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    
    return(
        <div>
            {id ? (
                <Entrada 
                somenteLeitura 
                texto='Código' 
                valor={id} 
                className='mb-5' />

            ): false}

            <Entrada 
            texto='Nome' 
            valor={nome} 
            valorMudou={setNome}
            className='mb-5'
            />

            <Entrada 
            texto='Idade' 
            tipo="number" 
            valor={idade} 
            valorMudou={setIdade} 
            />


            <div className ='flex justify-end mt-7'>
                <Botao  className={`
                    mr-2 bg-gradient-to-r from-yellow-400 to-yellow-700
                `} onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>{id ? 'Alterar': 'Salvar'}
                </Botao>
                <Botao  className={`
                    mr-2 bg-gradient-to-r from-red-400 to-red-700
                `} onClick={props.cancelado}>Cancelar
                </Botao>
                
               
                
            </div>
        </div>
    )
}