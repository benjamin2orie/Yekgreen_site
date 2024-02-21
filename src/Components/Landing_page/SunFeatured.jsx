

import React from 'react';
import styles from './SubFeatured.module.css';
import {AiOutlineHeart, AiOutlineStar} from 'react-icons/ai';
import Jollof2 from '../Landing_Image/jollof_rice&beans.jpeg';
import Rice from '../Landing_Image/rice&stew.jpeg';
import Egusi from '../Landing_Image/Egusi_soup.jpeg';
import Onion from '../Landing_Image/Oniononion2.png';
import Tuber from '../Landing_Image/Vectortuber.png';
import Chip from '../Landing_Image/Chilipep.png';
import Main from './Main';

const SunFeatured = () => {
  return (
    <div>
        <div className={styles.container}>
            <section className={styles.section_container}>
               <div className={styles.flex_container}>
                  <img src={Jollof2} alt='jollof rice & beans' className={styles.food_menu}/>
                   <div className={styles.card2}>
                     <div className={ styles.love}>
                         <p>jollof rice 🥥 & beans</p>
                          <AiOutlineHeart className={styles.heart}/>
                       </div>
                       <div className={ styles.love2}>
                         <p className={styles.para}>High in Carbs . <span className={styles.grey}>6 Servings</span></p>
                         <p>4.5 <span><AiOutlineStar className={styles.heart}/></span></p>
                       </div>
                    </div>
              </div>

              <div className={styles.flex_container}>
                  <img src={Rice} alt='rice & stew' className={styles.food_menu}/>
                   <div className={styles.card2}>
                     <div className={ styles.love}>
                         <p>rice 🥥 & stew</p>
                          <AiOutlineHeart className={styles.heart}/>
                       </div>
                       <div className={ styles.love2}>
                         <p className={styles.para}>High in vitamins . <span className={styles.grey}>4 Servings</span></p>
                         <p>4.5 <span><AiOutlineStar className={styles.heart}/></span></p>
                       </div>
                    </div>
              </div>

              <div className={styles.flex_container}>
                  <img src={Egusi} alt='rice & stew' className={styles.food_menu}/>
                   <div className={styles.card2}>
                     <div className={ styles.love}>
                         <p>egusi soup🥥</p>
                          <AiOutlineHeart className={styles.heart}/>
                       </div>
                       <div className={ styles.love2}>
                         <p className={styles.para}>High in Nutrients . <span className={styles.grey}>6 Servings</span></p>
                         <p>4.5 <span><AiOutlineStar className={styles.heart}/></span></p>
                       </div>
                    </div>
              </div>
            </section>
            <img src={Onion} alt='onion' className={styles.onion}/>
            <img src={Tuber} alt='tuber' className={styles.tuber}/>
            <img src={Chip} alt='chip peper' className={styles.peper}/>
            <div className={styles.border}></div>
        </div>
        <Main/>
      
    </div>
  )
}

export default SunFeatured
