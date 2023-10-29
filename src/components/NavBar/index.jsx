import Link from "next/link";
import styles from "./styles.module.css"

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            
                <h1>Eventos</h1>
            <ul className={styles.link_items}>

                <li>
                <Link href="/cadastro">Cadastrar Evento</Link>
                </li>
                
            </ul>
           
        </nav>

    )
}