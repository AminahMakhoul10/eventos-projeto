import Link from 'next/link'
import styles from './styles.module.css'
export default function Cabecalho(){
    return(
        <>
        <div className={styles.cabecalho}>
            <h1>Eventos</h1>
            <ul className={styles.navbar}>
                <li>
                    <Link href="/cadastro"> CADASTRAR EVENTO</Link>
                </li>

               
            </ul>
        </div>
        </>
    )
}