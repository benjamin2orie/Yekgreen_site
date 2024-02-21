
import React from 'react';
import styles from '../Recipe_Page/Subbreakfast.module.css';
import Main from '../Landing_page/Main';
// import Footer from '../Landing_page/Footer';
import EggSauce from '../Recipes_Images/friesegg.jpg';
import Okpa from '../Recipes_Images/Okpa.jpg';
import Beans from '../Landing_Image/jollof_rice&beans.jpeg';
import Beans_p from '../Recipes_Images/Beans&p.jpg';
import Bread_veggies from '../Recipes_Images/Bread&Veggies.jpg';
import Fruits from '../Recipes_Images/Fruit&Veggies.jpg';
import { AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';

const Subbreakfast = () => {
  return (
    <div>
        <section className={styles.container}>
            <div className={styles.main_container}>
            <div className={styles.flex_container}>
            <img src={EggSauce} alt='egg sauce' className={styles.food_menu}/>
            <div className={styles.card2}>
              <div className={styles.love}>
                <p>fries 🍞 & egg sauce</p>
                <AiOutlineHeart className={styles.heart}/>
              </div>
              <div className={styles.love2}>
                <p className={styles.para}>High in proteins . <span className={styles.grey}>3 Servings</span></p>
                <p>4.5 <span><AiOutlineStar className={styles.heart}/></span></p>
              </div>
            </div>
          </div>

          <div className={styles.flex_container}>
            <img src={Okpa} alt='okpa' className={styles.food_menu}/>
            <div className={styles.card2}>
              <div className={styles.love}>
                <p>okpa & pap</p>
                <AiOutlineHeart className={styles.heart}/>
              </div>
              <div className={styles.love2}>
                <p className={styles.para}>High in proteins . <span className={styles.grey}>6 Servings</span></p>
                <p>4.5 <span><AiOutlineStar className={styles.heart}/></span></p>
              </div>
            </div>
          </div>

          <div className={styles.flex_container}>
            <img src={Beans} alt='jollof rice & beans' className={styles.food_menu}/>
            <div className={styles.card2}>
              <div className={styles.love}>
                <p>jollof rice & beans</p>
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
                    <img src={Beans_p} alt='beans & plantains' className={styles.food_menu}/>
                    <div className={styles.card2}>
                        <div className={styles.love}>
                            <p>beans & plantains</p>
                            <AiOutlineHeart className={styles.heart}/>
                        </div>
                        <div className={styles.love2}>
                            <p className={styles.para}>High in carbs . <span className={styles.grey}>6 Servings</span></p>
                            <p>4.5 <span><AiOutlineStar className={styles.heart}/></span></p>
                        </div>
                    </div>
                </div>
                

                <div className={styles.flex_container}>
                    <img src={Bread_veggies} alt='bread & veggies' className={styles.food_menu}/>
                    <div className={styles.card2}>
                        <div className={styles.love}>
                            <p>bread 🥪 & veggies</p>
                            <AiOutlineHeart className={styles.heart}/>
                        </div>
                        <div className={styles.love2}>
                            <p className={styles.para}>High in vitamins . <span className={styles.grey}>4 Servings</span></p>
                            <p>4.5 <span><AiOutlineStar className={styles.heart}/></span></p>
                        </div>
                    </div>
                </div>


                <div className={styles.flex_container}>
                    <img src={Fruits} alt='fruits & veggies' className={styles.food_menu}/>
                    <div className={styles.card2}>
                        <div className={styles.love}>
                            <p>fruits & veggies</p>
                            <AiOutlineHeart className={styles.heart}/>
                        </div>
                        <div className={styles.love2}>
                            <p className={styles.para}>High in vitamins . <span className={styles.grey}>6 Servings</span></p>
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

export default Subbreakfast
