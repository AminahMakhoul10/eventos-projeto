import styles from "./styles.module.css"

export default function Mensagem({texto, tipo}){
    const estilo ={
        erro:{'backgroundColor': "red"},
        sucesso:{'bacgroundColor': "green"}
    }

    return(
        <>
        <div className={styles.mensagem} style={tipo == "erro" ? estilo.erro:estilo.sucesso}>
            <span>{texto}</span>
        </div>
            </>

    )
}