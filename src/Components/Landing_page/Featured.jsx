
import React from 'react';
import styles from './Featured.module.css';
import Carot from '../Landing_Image/Carot.png';
import Jollof from '../Landing_Image/jollof_rice&chicken.png';
import Akara from '../Landing_Image/akara&pap.jpeg';
import Yam from '../Landing_Image/yam_porridge.jpeg';
import SunFeatured from './SunFeatured';
import {AiOutlineHeart, AiOutlineStar} from 'react-icons/ai'
const Featured = () => {
  return (
    <div>
      <div className={ styles.f_container}>
        <section className={ styles.f_section}>
          <div className={styles.featured}>
            <h3>featured recipes</h3>
            <img src={Carot} alt='carot'/>
          </div>
          <div className={ styles.recipe_container}>
            <div className={styles.parent_div}> 
              <img src={Jollof} alt='jollof rice & chicken' className={styles.food_menu}/>
              <div className={styles.card2}>
                <div className={ styles.love}>
                  <p>jollof rice 🍚 & chicken 🍾</p>
                  <AiOutlineHeart className={styles.heart}/>
                </div>
                <div className={ styles.love2}>
                  <p className={styles.para}>High in Carbs . <span className={styles.grey}>6 Servings</span></p>
                  <p>4.5 <span><AiOutlineStar className={styles.heart}/></span></p>
               </div>
              </div>
           </div>

           <div className={styles.parent_div}> 
              <img src={Akara} alt='akara & pap' className={styles.food_menu}/>
              <div className={styles.card2}>
                <div className={ styles.love}>
                  <p>akara & pap</p>
                  <AiOutlineHeart className={styles.heart}/>
                </div>
                <div className={ styles.love2}>
                  <p className={styles.para}>High in proteins . <span className={styles.grey}>4 Servings</span></p>
                  <p>4.5 <span><AiOutlineStar className={styles.heart}/></span></p>
               </div>
              </div>
           </div>

           <div className={styles.parent_div}> 
              <img src={Yam} alt='yam & porridge' className={styles.food_menu}/>
              <div className={styles.card2}>
                <div className={ styles.love}>
                  <p>yam & porridge 🍲</p>
                  <AiOutlineHeart className={styles.heart}/>
                </div>
                <div className={ styles.love2}>
                  <p className={styles.para}>High in Carbs . <span className={styles.grey}>4 Servings</span></p>
                  <p>4.5 <span><AiOutlineStar className={styles.heart}/></span></p>
               </div>
              </div>
           </div>
          </div>
          <SunFeatured/>
       </section>
      </div> 
    </div>
  )
}

export default Featured
