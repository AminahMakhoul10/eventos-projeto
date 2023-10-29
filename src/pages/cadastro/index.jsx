import { useState } from "react";
import styles from './styles.module.css'
import axios from "axios";
import {format} from "date-fns"; //essa biblioteca é para formatar as datas de incio e fim e foi instalada 

export default function Form() {

     const [evento, setEvento] = useState({
        titulo: "",
        descricao: "",
        dataInicio: "",
        dataFim: "",
        local:"",
    })
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [dataFim, setDataFim] = useState('');
    const [local, setLocal] = useState('');

  const inserirEvento = (e) => {
    e.preventDefault()

    const dataFormatadaInicio = format(new Date(evento.dataInicio), 'dd/MM/yy')
    const dataFormatadaFim = format(new Date(evento.dataFim), 'dd/MM/yy')

    
    axios.post("http://localhost:3001/eventos",{
      titulo:evento.titulo,
      descricao:evento.descricao,
      dataInicio: dataFormatadaInicio,
      dataFim: dataFormatadaFim, 
      local: evento.local,
       
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
          type='date'
          id="dataInicio"
          value={evento.dataInicio}
          onChange={e => setEvento({
            ...evento,
            dataInicio: e.target.value
        })} />

        <label htmlFor="dataFim">Data Fim:</label>
        <input className={styles.input}
          type='date'
          id="dataFim"
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