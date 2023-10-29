
import Footer from '@/components/Footer'
import styles from '@/styles/home.module.css'
import Navbar from '@/components/NavBar'
import ButtonForm from '@/components/ButtonForm'
import CardList from '@/components/CardList'


export default function Home() {
  return (
    <>
   
    <div className={styles.container}>
      <div className={styles.subcontainer}>
     
      <Navbar/>
      </div>
    
    </div>
    
    <div className={styles.container}>
      <div className={styles.subcontainer}>
    <CardList/>
    </div>
    
    </div>
        <Footer/>
       
        
        <ButtonForm/>
       

  
    </>
  )
}

