import React from 'react'
import styles from '../../styles/AreaAtuacao.module.css'
import direitoCivelImg from '../../assets/direito-civil.png'
import direitoTributario from '../../assets/tributario.png'

const AreaAtuacao = () => {
  return (
    <div id="areas-atuacao" className={styles.areaAtuacao}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 >Áreas de atuação</h1>
          <div className={styles.cards}>
            {/* Primeiro Card */}
            <div className={styles.card}>
              <img src={direitoCivelImg.src} alt="direito cível" />
              <h1>Cível</h1>
              <div className={styles.content}>
                <ul>
                  <li>Família</li>
                  <li>Sucessões</li>
                  <li>Contratos</li>                
                </ul>
              </div>
            </div>
            {/* Segundo Card */}
            <div className={styles.card}>
              <img src={direitoTributario.src} alt="tributário" />
              <h1>Tributário</h1>
              <div className={styles.content}>
                <ul>
                  <li>Revisão de Inscrição em Dívida Ativa</li>
                  <li>Execução Fiscal</li>
                  <li>Bloqueio de Bens</li>
                  <li>Consultoria</li>
                </ul>
              </div>
            </div>
          </div>
            <div className={styles.areaTexto}>
              Prestamos de acessoria jurídica para empresas e pessoas, em todo o país 
              através de atendimento online ou presencial, buscando apresentar soluções 
              customizadas para cada situação.
            </div>
        </div>
      </div>
    </div>
  )
}

export default AreaAtuacao