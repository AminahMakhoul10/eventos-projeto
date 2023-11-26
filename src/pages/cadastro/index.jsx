import { useState } from "react";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './styles.module.css'
import axios from "axios";
import Input from "@/components/Input";


export default function Cadastro() {

 
  const [evento, setEvento] = useState({
    titulo: "",
    descricao: "",
    dataInicio: "",
    dataFim: "",
    local:"",
    
  })

  const limparEvento = () => {
    setEvento({
      titulo: "",
      descricao: "",
      dataInicio: "",
      dataFim: "",
      local:"",
    })
  }
  const handleInputChange = (e) => {
    const { name, value, } = e.target
    setEvento({
      ...evento,
      [name]: value
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isEmptyField = Object.values(evento).some(value => value === "")

    if (isEmptyField) {
      toast.error('Preencher todos os campos antes de prosseguir é obrigatório.');
      return;
    }

    try {
      await axios.post('http://localhost:3001/eventos', evento)
      limparEvento();
      toast.success('Evento reservado com sucesso!')
      }catch (error) {
        console.error(error);
        toast.error('Não foi possivel cadastrar evento, por favor tente novamente!')
      }
    }
  
    return (
      <div className={styles.container}>
        <div className={styles.titulo}>
          <h1>Cadastrar novo evento</h1>
          <ToastContainer/>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.subcontainer}>
            <div>
              <label htmlFor='descricao'>Título:</label>
              <br />
              <textarea
                name='titulo'
                id='titulo'
                className={styles.textarea}
                value={evento.titulo}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div>
              <label htmlFor='descricao'>Descrição:</label>
              <br />
              <Input
                name='descricao'
                id='descricao'
                type='text'
                value={evento.descricao}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor='dataInicio'>Data Início:</label>
              <br />
              <Input
              id='dataInicio'
              type='datetime-local'
              name='dataInicio'
              value={evento.dataInicio}
              onChange={handleInputChange}
             
            />
            </div>

            <div>
              <label htmlFor='dataFim'>Data Fim:</label>
              <br />
              <Input
                id='dataFim'
                type='datetime-local'
                name='dataFim'
                value={evento.dataFim}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor='local'>Local:</label>
              <br />
              <Input
                id='local'
                type='text'
                name='local'
                value={evento.local}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor='img'>Imagem</label>
              <br/>
              <Input
              id='img'
              type='file'
              name='img'
              value={evento.img}></Input>
            </div>
            <div>
              <button className={styles.botaoenviar} type='submit'>
                Enviar</button>
            </div>
          </div>
        </form>
      </div>
  )
}