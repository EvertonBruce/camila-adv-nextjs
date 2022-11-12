import React from 'react'
import styles from '../../styles/Hero.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import scrollToElement from '../../Utils.js'

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    cssEase: 'linear'
  };

  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Slider {...settings}>
            <div className={`${styles.carouselItem} ${styles.item1}`}>
              <h3>Seja bem-vindo</h3>
              <h1>Prestamos assessoria jurídica para pessoas e empresas</h1>
              <a
                className={`${styles.saibaMais} ${styles.heroBtn}`}
                href="#areas-atuacao"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToElement('#areas-atuacao')
                }}
              >
                Saiba mais
              </a>
            </div>
            <div className={`${styles.carouselItem} ${styles.item2}`}>
              <h3>Tem dúvidas?</h3>
              <h1 className={styles.facaConsultoria}>Faça uma consultoria</h1>
              <a
                className={`${styles.nossosServicos} ${styles.heroBtn}`}
                href="#contato"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToElement('#contato')
                }}
              >
                Fale conosco
              </a>
              <div className={styles.planoFundo}>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Hero;