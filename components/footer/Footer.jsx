import React from 'react';
import styles from '../../styles/Footer.module.css'
import {GiScales} from 'react-icons/gi';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoFooter}>
            <GiScales className={styles.iconFooter} />
            <div className={styles.logoNome}>
              <p>CAMILA BERNARDO</p>
              <p className={styles.advogada}>ADVOGADA</p>
            </div>
            <span>Todos os direitos reservados a Camila Bernardo Advocacia - Desenvolvido por <a href="https://www.linkedin.com/in/everton-nascimento-de-oliveira" target="_blank" rel="noreferrer" >Everton Bruce</a></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer