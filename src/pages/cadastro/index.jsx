import { useState } from "react";
import styles from './styles.module.css'
import axios from "axios";


export default function Form() {

     const [evento, setEvento] = useState({
        titulo: "",
        descricao: "",
        dataInicio: "",
        dataFim: "",
        local:"",
       
    })
    const [titulo, seTitulo] = useState('');
    const [descricao, seDescricao] = useState('');
    const [dataInicio, seDataInicio] = useState('');
    const [dataFim, seDataFim] = useState('');
    const [local, setLocal] = useState('');
    
  

  const inserirEvento = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3001/eventos", {
      titulo:evento.titulo,
      descricao:evento.descricao,
      dataInicio: evento.dataInicio,
      dataFim: evento.dataFim, 
      local: evento.local
       
    }).then(res => console.log(res.data))
    .catch(error => console.log(error))
  }
  

  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
    <form onSubmit={e => inserirEvento(e)}>
      <div>
        <label htmlFor="titulo">Titulo:</label>
        <input className={styles.input}
          type="text"
          id="titulo"
          value={evento.titulo}
          onChange={e => setEvento({
            ...evento,
            titulo: e.target.value 
        })} />

        <label htmlFor="descricao">Descrição:</label>
        <input className={styles.input}
          id="descricao"
          value={evento.descricao}
          onChange={e => setEvento({
            ...evento,
            descricao: e.target.value
        })} />

        <label htmlFor="dataInicio">Data Inicio:</label>
        <input className={styles.input}
          type="dataInicio"
          id="titulo"
          value={evento.dataInicio}
          onChange={e => setEvento({
            ...evento,
            dataInicio: e.target.value
        })} />

        <label htmlFor="dataFim">Data Fim:</label>
        <input className={styles.input}
          type="dataFim"
          id="titulo"
          value={evento.dataFim}
          onChange={e => setEvento({
            ...evento,
            dataFim: e.target.value
        })} />

        <label htmlFor="local">Local:</label>
        <input className={styles.input}
          type="local"
          value={evento.local}
          onChange={e => setEvento({
            ...evento,
            local: e.target.value
        })} />
        
      </div>
      <button type="submit" className={styles.button}>Enviar</button>

    </form>
    </div></div>
  )
}