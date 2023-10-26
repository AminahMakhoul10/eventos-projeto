import Link from 'next/link'
import styles from './styles.module.css'
import Button from '../Button'
export default function Card2({ id, imagem, titulo, descricao, dataInicio, dataFim, local }) {

    return (
        <>
        <div>
            <div className={styles.card}>
                <div>
                    <img className={styles.img} src={imagem}/>
                    <div className={styles.subcontainer}>
                        <h2 className={styles.cardTitulo}>{titulo}</h2>
                        <div>Descrição: {descricao}</div>
                        <br/>
                        
                    </div>
                    <Link href={`/eventos/${id}`}>
                    
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}