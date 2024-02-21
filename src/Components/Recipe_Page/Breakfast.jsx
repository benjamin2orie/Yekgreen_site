
import styles from '../Recipe_Page/Breakfast.module.css';
import Logo from '../Landing_Image/gogo.png';
import React from 'react'
import { AiOutlineUser, AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';
import { FiFileText } from 'react-icons/fi';
import Burger from '../Recipes_Images/burger-thin.png';
import Bread from '../Recipes_Images/Bread.jpg';
import Pancake from '../Recipes_Images/pancake.jpg';
import jollof from '../Landing_Image/jollof_rice&chicken.png';
import Subbreakfast from './Subbreakfast';
import { Link } from 'react-router-dom';

const Breakfast = () => {

  const Open=()=>{
    let main = document.getElementById('main');
    main.style.width= '250px';
    main.style.display= 'block';
}

const Close=()=>{
    let main = document.getElementById('main');
    main.style.width= '0';
    main.style.display= 'none';
}
  return (
    <div>
      <header className={styles.breakfast_header}>
        <div className={styles.container}>
          <div className={styles.logo}>
              <img src={Logo} alt='logo'/>

          </div>
          <nav>
            <ul>
              <li>
                <Link to='/about' className={styles.conc}>about us</Link>
              </li>
              <li onClick={Open}>recipes</li>
              <li>
                <Link to='/blog' className={styles.conc}>blog</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.users}>
            <FiFileText/>
            <AiOutlineUser/>
          </div>
        </div>
      </header>
        <div id='main' className={styles.drop}>
          <li className={styles.open_btn} onClick={Close}>&times;</li>
          <li>
            <Link to='/breakfast'>breakfast</Link>
          </li>
          <li>
            <Link to='/lunch'>lunch</Link>
          </li>
          <li>
            <Link to='/dinner'>dinner</Link>
          </li>
        </div>
      <div className={styles.burger}>
        <img src={Burger} alt='burger'/>
        <h3>Breakfast recipes</h3>
      </div>
      <section className={styles.container_section}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in aliquam tristique lacinia tellus libero massa proin suspendisse. Ante tempus mauris nec neque ullamcorper tempor commodo. Nunc vitae velit non et. Nunc id tristique vestibulum enim tincidunt a tellus. Malesuada amet tincidunt sit id egestas libero. Praesent lectus est quis pretium velit, in. Mi nisi, velit egestas sapien quam mi netus.</p>
      </section>
      <main>
        <div className={styles.main_counter}>
          <div className={styles.flex_container}>
            <img src={Bread} alt='bread & tosted tea' className={styles.food_menu}/>
            <div className={styles.card2}>
              <div className={styles.love}>
                <p>bread 🍞 toast & tea ☕</p>
                <AiOutlineHeart className={styles.heart}/>
              </div>
              <div className={styles.love2}>
                <p className={styles.para}>High in Carbs . <span className={styles.grey}>4 Servings</span></p>
                <p>4.5 <span><AiOutlineStar className={styles.heart}/></span></p>
              </div>
            </div>
          </div>

          <div className={styles.flex_container}>
            <img src={Pancake} alt='pancake' className={styles.food_menu}/>
            <div className={styles.card2}>
              <div className={styles.love}>
                <p>pancakes 🎂 & tea☕</p>
                <AiOutlineHeart className={styles.heart}/>
              </div>
              <div className={styles.love2}>
                <p className={styles.para}>High in Carbs . <span className={styles.grey}>4 Servings</span></p>
                <p>4.5 <span><AiOutlineStar className={styles.heart}/></span></p>
              </div>
            </div>
          </div>

          <div className={styles.flex_container}>
            <img src={jollof} alt='bread & tosted tea' className={styles.food_menu}/>
            <div className={styles.card2}>
              <div className={styles.love}>
                <p>jollof rice & chicken</p>
                <AiOutlineHeart className={styles.heart}/>
              </div>
              <div className={styles.love2}>
                <p className={styles.para}>High in Carbs . <span className={styles.grey}>6 Servings</span></p>
                <p>4.5 <span><AiOutlineStar className={styles.heart}/></span></p>
              </div>
            </div>
          </div>
        </div>
         <Subbreakfast/>
      </main>
    </div>
  )
}

export default Breakfast
