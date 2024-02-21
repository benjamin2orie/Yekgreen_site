
import { AiOutlineSend } from 'react-icons/ai';
import styles from './Main.module.css';
import Footer from './Footer';
import Dino from '../Landing_Image/Miss.jpeg';
import React from 'react'

const Main = () => {
  return (
    <div>
        <div className={styles.container}>
          <img src={Dino} alt='background' className={styles.Dino}/>
            <main className={styles.container_main}>
                <h2>Don't miss out!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ex cupiditate fugiat consectetur eius, quisquam ducimus nesciunt quos rerum voluptates!</p>
                <div className={styles.container_input}>
                    <input type= 'email' placeholder = 'Email address'/><br/>
                    <button className={styles.btn_btn}><AiOutlineSend/></button>
                </div>
            </main>
        </div>
        <Footer/>
      
    </div>
  )
}

export default Main
