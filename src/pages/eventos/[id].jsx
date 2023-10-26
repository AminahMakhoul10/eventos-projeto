import Cabecalho from "@/components/Cabecalho"
import Card from "@/components/Card"
import Card2 from "@/components/Card2"
import Mensagem from "@/components/Mensagem"
import Navbar from "@/components/NavBar"

import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function EventosHome(){

    const [evento, setEventos]= useState({})
    const [mensagem, setMensagem] = useState({existe:false, texto: "", tipo:""})

    const router = useRouter()

    useEffect(() =>{
        const id = router.query.id
 
        if(id) {
            axios.get(`http://localhost:3001/eventos/${router.query.id}`)
                .then(resultado => setEventos(resultado.data))
        }

    }, [router])
    
    return(
        <>
        <Cabecalho/>
        <Navbar/>
        <Card2
         key={evento.id}
         imagem={evento.imagem}
         id={evento.id}
         descricao={evento.descricao}
         />
         <Mensagem/>
        <div></div>
       
        </>
    )
}