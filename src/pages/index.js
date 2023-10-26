
import Footer from '@/components/Footer'
import Link from 'next/link'
import Button from '@/components/Button'
import styles from '@/styles/home.module.css'
import Navbar from '@/components/NavBar'
import ButtonForm from '@/components/ButtonForm'
import Form from '@/components/Form'
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

