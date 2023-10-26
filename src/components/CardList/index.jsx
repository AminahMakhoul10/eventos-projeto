import axios from "axios"
import { useEffect ,useState } from "react"
import Card from "../Card"
import styles from './styles.module.css'
export default function CardList(){



  const [eventos, setEventos] = useState([])

  useEffect(() =>{
    
    axios.get('http://localhost:3001/eventos')
      .then(resultado => setEventos(resultado.data))
      .catch(error => console.log(error))
  }, [])

  function formatarData(data) {
    const[ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
  }
  
    return(
        <>
            <div className={styles.listCard}>
                  {eventos.map(e =>(
                    <Card
                    key={e.id}
                    imagem={e.imagem}
                    id={e.id}
                    titulo={e.titulo}
                    descricao={e.descricao}
                    dataInicio={formatarData(e.dataInicio)}
                    dataFim={formatarData(e.dataFim)} 
                    local={e.local}
                    />
                  
                  ))
                }
            </div>
        </>
    )
}