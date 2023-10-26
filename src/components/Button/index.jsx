import styles from './styles.module.css'

export default function Button({children, ...props}){
    return(
        <>
        <button style={{verticalAlign:'middle'}}className={styles.button} {...props}>{children}</button>
        </>
    )
}