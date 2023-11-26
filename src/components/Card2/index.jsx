import Link from 'next/link'
import styles from './styles.module.css'
export default function Card2({ id, imagem, titulo, descricao,}) {

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