import Link from "next/link";
import styles from "./styles.module.css"

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            
                <h1>Eventos</h1>
            <ul className={styles.link_items}>

                <li>
                <Link href="/cadastro">CadastroEvento</Link>
                </li>
                
            </ul>
            <ul className={styles.link_items}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">Sobre</Link>
                </li>
            </ul>
        </nav>

    )
}