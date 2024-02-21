
import styles from '../Recipe_Page/Subbreakfast.module.css';
import Egusi from '../Landing_Image/Egusi_soup.jpeg';
import Spark from '../Recipes_Images/spark.jpg';
import Plantain from '../Recipes_Images/Beans&p.jpg';
import Nodles from '../Recipes_Images/nodisi.jpg';
import Jollof from '../Landing_Image/jollof_rice&beans.jpeg';
import Porridge from '../Recipes_Images/Porridge.jpg';
import { AiOutlineHeart, AiOutlineStar} from 'react-icons/ai';
import React from 'react'
import Main from '../Landing_page/Main';

const SubDinner = () => {
  return (
    <div>
        <section className={ styles.container}>
            <div className={styles.main_container}>
                <div className={styles.flex_container}>
                    <img src={Egusi} alt='egusi soup and semo' className={styles.food_menu}/>
                    <div className={styles.card2}>
                        <div className={styles.love}>
                            <p>egusi soup & semo</p>
                            <AiOutlineHeart className={styles.heart}/>
                        </div>
                        <div className={styles.love2}>
                            <p className={styles.para}>High in Nutrients . <span className={styles.grey}>4 Servings</span></p>
                            <p>4.5 <span><AiOutlineStar className={styles.heart}/></span></p>
                        </div>
                    </div>
               </div>

               <div className={styles.flex_container}>
                <img src={Spark} alt='spaghetti' className={styles.food_menu}/>
                <div className={styles.card2}>
                    <div className={styles.love}>
                        <p>spaghetti</p>
                        <AiOutlineHeart className={styles.heart}/>
                    </div>
                    <div className={styles.love2}>
                        <p className={styles.para}>High in Carbs . <span className={styles.grey}>4 Servings</span></p>
                        <p>4.5 <span><AiOutlineStar className={styles.heart}/></span></p>
                    </div>
                </div>
              </div>

                <div className={styles.flex_container}>
                        <img src={Jollof} alt='jollof rice and beans' className={styles.food_menu}/>
                        <div className={styles.card2}>
                            <div className={styles.love}>
                                <p>jollof rice 🍚 & beans</p>
                                <AiOutlineHeart className={styles.heart}/>
                            </div>
                            <div className={styles.love2}>
                                <p className={styles.para}>High in Carbs . <span className={styles.grey}>6 Servings</span></p>
                                <p>4.5 <span><AiOutlineStar className={styles.heart}/></span></p>
                            </div>
                        </div>
                </div>
            </div>

            <div className={styles.container2}>
                <div className={styles.flex_container}>
                    <img src={Plantain} alt='beans and plantains' className={styles.food_menu}/>
                    <div className={styles.card2}>
                        <div className={styles.love}>
                            <p>beans & plantains</p>
                            <AiOutlineHeart className={styles.heart}/>
                        </div>
                        <div className={styles.love2}>
                            <p className={styles.para}>High in Carbs . <span className={styles.grey}>6 Servings</span></p>
                            <p>4.5 <span><AiOutlineStar className={styles.heart}/></span></p>
                        </div>
                    </div>
               </div>

               <div className={styles.flex_container}>
                    <img src={Nodles} alt='noodle' className={styles.food_menu}/>
                    <div className={styles.card2}>
                        <div className={styles.love}>
                            <p>noodles & veggies</p>
                            <AiOutlineHeart className={styles.heart}/>
                        </div>
                        <div className={styles.love2}>
                            <p className={styles.para}>High in Vitamins . <span className={styles.grey}>4 Servings</span></p>
                            <p>4.5 <span><AiOutlineStar className={styles.heart}/></span></p>
                        </div>
                    </div>
               </div>

               <div className={styles.flex_container}>
                    <img src={Porridge} alt='plantain porrridge' className={styles.food_menu}/>
                    <div className={styles.card2}>
                        <div className={styles.love}>
                            <p>plantain porridge ☕</p>
                            <AiOutlineHeart className={styles.heart}/>
                        </div>
                        <div className={styles.love2}>
                            <p className={styles.para}>High in fibre . <span className={styles.grey}>6 Servings</span></p>
                            <p>4.5 <span><AiOutlineStar className={styles.heart}/></span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.border}></div>
        </section>
        <Main/>
      
    </div>
  )
}

export default SubDinner
