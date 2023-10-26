
import React, { useState } from 'react';
import styles from './styles.module.css'

export default function ButtonForm() {
  const [mostrarForm, setMostrarForm] = useState(false);

  const toggleForm = () => {
    setMostrarForm(!mostrarForm);
  };

  return (
    <div className={styles.button}>
    </div>
  )
}
