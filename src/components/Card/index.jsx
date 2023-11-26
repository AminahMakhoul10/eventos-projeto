import Link from 'next/link'
import styles from './styles.module.css'
import Button from '../Button'
export default function Card({ id, imagem, titulo, dataInicio, dataFim, local }) {

    return (
        <>
        <div>
            <div className={styles.card}>
                <div>
                    <img className={styles.img} src={`${imagem}`}/>
                    <div className={styles.subcontainer}>
                        <h2 className={styles.cardTitulo}>{titulo}</h2>
                        <br/>
                        <div>Data Início: {dataInicio}</div>
                        <br/>
                        <div>Data Fim: {dataFim}</div>
                        <br/>
                        <div>Local: {local}</div>
                        <br/>
                        
                    </div>
                    <Link href={`/eventos/${id}`}>
                    <Button className={styles.button}>Detalhes</Button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}