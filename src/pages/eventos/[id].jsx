import Cabecalho from "@/components/Cabecalho"
import Card2 from "@/components/Card2"
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function EventosHome(){

    const [evento, setEventos]= useState({})

    const router = useRouter()

    useEffect(() =>{
        const id = router.query.id
 
        if(id) {
            axios.get(`http://localhost:3001/eventos/${router.query.id}`)
                .then(resultado => setEventos(resultado.data))
                .catch(erro => console.error("Erro ao buscar dados do evento:", erro));
        }

    }, [router])
    
    return(
        <>
        <Cabecalho/>
        
        <Card2
         key={evento.id}
         imagem={evento.imagem}
         id={evento.id}
         descricao={evento.descricao}
         />
       
        </>
    )
}