
import FooterLogo from '../Landing_Image/Footer.png';
import styles from './Footer.module.css';
import Facebook from '../Landing_Image/Frame 105.png';
import Instagram from '../Landing_Image/Frame 106.png';
import Twit from '../Landing_Image/Frame 107.png';
import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className={styles.footer_container}>
            <div className={styles.div_footer}>
                <div className={styles.logo_content}>
                  <img src={FooterLogo} alt='logo'/>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <p>Aenean at tristique pellentesque arcu morbi rhoncus viverra nisi integer.</p>
                  <p> Dui est, scelerisque amet, cursus. Dui convallis.</p>
                </div>
                <div className={styles.container_about}>
                  <ul>
                    <li>about us</li>
                    <li>privacy policy</li>
                    <li>disclaimer</li>
                  </ul>
                </div>
                <div className={styles.social}>
                  <h3>social</h3>
                  <div className={styles.social_container}>
                    <img src={Facebook} alt='icon' className={styles.Book}/>
                     <img src={Instagram} alt='icon'/>
                    <img src={Twit} alt='icon'/>
                  </div>
                </div>
            </div>
            <div className={styles.border}></div>
            <p className={styles.terms}>copyright 2024. All right reserved</p>
        </footer>
      
    </div>
  )
}

export default Footer
