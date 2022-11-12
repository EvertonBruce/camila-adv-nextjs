import React from 'react';
import styles from '../../styles/Navbar.module.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import {GiScales} from 'react-icons/gi'
import { useState } from 'react';
import scrollToElement from '../../Utils.js'

const Header = () => {
    const [nav, SetNav] = useState(false);
    const handleNav = () => SetNav(!nav);

    return (
      <div className={styles.navbar}>
        <div className={styles.container}>
          <a className={styles.logo} href='/'>
            <GiScales className={styles.icon}/>
            <div className={styles.logoNome}>
              <p>CAMILA BERNARDO</p>
              <p className={styles.advogada}>ADVOGADA</p>
            </div>
          </a>

          <ul className={nav ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>
            <li><a href='/'>Home</a></li>
            <li>
              <a
                href='#contato'
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement('#contato');
                  handleNav();
                }}
              >
                Contato
              </a>
            </li>
            <li>
              <a
                href="#areas-atuacao"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement('#areas-atuacao');
                  handleNav();
                }}
              >
                Áreas de atuação
              </a>
            </li>
          </ul>
          <div className={styles.hamburger} onClick={handleNav}>
            {!nav
              ? <FaBars className={styles.icon} />
              : <FaTimes className={styles.icon} />}
          </div>
        </div>
      </div>
    )
  }

export default Header;