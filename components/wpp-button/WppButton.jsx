import React from 'react'
import styles from '../../styles/WppButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WppButton = () => {
  return (
    <>
      <a
        href="https://wa.me/5531993824670?text=Olá%20Gostaria%20de%20conversar%20sobre%20uma%20consultoria"
        className={styles.wppBtn}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={['fab', 'whatsapp']} className={styles.faWhatsapp}/>
      </a>
    </>
  )
}

export default WppButton;