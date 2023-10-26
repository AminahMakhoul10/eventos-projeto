
import React, { useState } from 'react';
import styles from './styles.module.css'

export default function Form() {
    const [evento, setEvento] = useState({
        titulo: "",
        descricao: "",
        dataInicio: "",
        dataFim: "",
        local:""
    })
    const [titulo, seTitulo] = useState('');
    const [descricao, seDescricao] = useState('');
    const [dataInicio, seDataInicio] = useState('');
    const [dataFim, seDataFim] = useState('');
    const [local, setLocal] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  

  return (
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
  );
}
