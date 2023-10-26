import styles from "./styles.module.css"

export default function Label({texto, forhtml}){
    return(
        <>
            <label htmlFor={forhtml} className={styles.label}>{texto}</label>
        </>
    )
}