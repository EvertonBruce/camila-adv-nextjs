import React from 'react'
import styles from '../../styles/Contato.module.css'
import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

const Contato = () => {
  return (
    <div id='contato' className={styles.contato}>
      <div className={styles.container}>
        <h1>Contato</h1>
        <div className={styles.content}>
          <div className={styles.faleConosco}>
            <span><BsWhatsapp />&nbsp;(31) 99382-4670</span>
            <span><AiOutlineMail />&nbsp;camilaadvbernardo@gmail.com</span>
          </div>
          <div className={styles.sobreMim}>
            <span>Camila Bernardo Silva</span>
            <span>OAB/MG 218388</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contato