
import {AiOutlinePlus, AiOutlineUser} from 'react-icons/ai';
import { FiFileText} from 'react-icons/fi';
import styles from './Blog.module.css';
import Logo from '../Landing_Image/gogo.png';
import B_image from '../Recipes_Images/b-image.png';
import Clock from '../Recipes_Images/clockC.png';
import {AiOutlineHeart} from 'react-icons/ai';
import { AiOutlineLike } from 'react-icons/ai';
import Jollof from '../Landing_Image/jollof_rice&chicken.png';
import Ingredients from '../Recipes_Images/b-ingidents.jpg';
import Main from '../Landing_page/Main';
import { Link } from 'react-router-dom'
import React from 'react'

const Blog = () => {

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
                    <li>blog</li>
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
            <div className={styles.container_blog}>
                <div className={styles.update}>
                    <h3>jollof rice & chicken</h3>
                    <p>updated 19/08/2022</p>
                </div>
                <div className={styles.print}>
                    <AiOutlineHeart className={styles.Like}/>
                    <button className={styles.print_btn}>print</button>
                </div>
            </div>

            <div className={styles.container_content}>
                <div className={ styles.para_content}>
                    <p>Jollof rice, is a rice dish from West Africa. The dish is typically made with long-grain rice, tomatoes, onions, spices, vegetables and meat in a single pot, although its ingredients and preparation methods vary across different regions.</p>
                    <p>Tellus diam felis, vel, ut pulvinar est amet aliquam. Id id nunc, id facilisis. Nec elementum, purus morbi consectetur iaculis gravida libero. Non tellus suspendisse nulla metus morbi vulputate lectus eu. Aenean mauris pharetra facilisi.</p>
                    <p className={styles.list}>Jump to recipes</p>
                </div>
                <div className={styles.container_image}>
                    <img src={Jollof} alt='jollof rice and chiken'/>
                </div>
            </div>
            <section className={styles.section_container}>
                <div className={styles.images}>
                    <img src={B_image} alt='about blog'/>
                    <p>It is fair to say that this delicious rice dish is pretty easy to make anywhere in the world because the ingredients are easy to find. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta nisi, condimentum fusce sed ut condimentum ac. Volutpat ac, maecenas aliquam lectus eget consectetur ut tincidunt aenean.</p>
                </div>

            </section>

            <main className={styles.main_container}>
                <div className={styles.recipe_facts}>
                    <h3>recipes facts</h3>
                    <div className={styles.recipe_flex}>
                        <div>
                            <img src={Clock} alt='clock icon'/>
                            <p>active: 20mins</p>
                            <p>total: 60mins</p>
                        </div>
                        <p className={styles.items}><AiOutlineLike/> 4 - 6 servings</p>
                    </div>
                </div>
                <div className={styles.ingredients}>
                    <div className={styles.item_list}>
                        <h3>ingredients</h3>
                        <ul>
                            <li>4 cups of rice</li>
                            <li>Tomato puree</li>
                            <li>1 bulb of red onions</li>
                            <li>4 pcs of scotch bonnet pepper</li>
                            <li>Thyme</li>
                            <li> Carrot & peas ( Optional )</li>
                        </ul>
                        <p className={styles.add_list}><AiOutlinePlus/> Add to shopping list</p>
                    </div>
                    <img src={Ingredients} alt='ingredients for cooking rice'/>
                </div>
            </main>
            <div className={styles.border}></div>

            <article>
                <h3>directions</h3>
                <div className={styles.container_direction}>
                    <h4>step 1</h4>
                    <p>In a blender, combine tomatoes, scotch bonnet pepper and onions; purée. Pour out half the purée into a bowl; set aside. Add the bell peppers to the purée remaining in the blender and pulse until smooth. Add to the mixture that was set aside and stir to combine.</p>
                    <h4>step 2</h4>
                    <p>Heat vegetable oil in a large pot over medium heat. Add blended vegetables along with the salt, curry powder, ground chile pepper, garlic powder, onion powder, bay leaves, ginger and thyme. Bring mixture to a boil.</p>
                    <h4>step 3</h4>
                    <p>Stir in the rice until well mixed, then reduce the heat to low.</p>
                    <h4>step 4</h4>
                    <p>Cover pot and let cook until rice is al dente, about 45 minutes. Check after 30 minutes; if rice is sauce-logged, remove the lid to cook off the excess sauce. If rice seems dry, stir in 1 to 2 cups water. Allow the rice at the bottom of the pot to char a bit to infuse it with a smoky flavor.</p>
                </div>
            </article>
            <div className={styles.nutrition_fact}>
                <h3>Nutrition Facts ( per servings )</h3>
                <div className={styles.fex_items}>
                    <div>
                        <h4>445</h4>
                        <p>Calories</p>
                    </div>
                    <div>
                        <h4>10g</h4>
                        <p>Fats</p>
                    </div>
                    <div>
                        <h4>89g</h4>
                        <p>Carbs</p>
                    </div>
                    <div>
                        <h4>7g</h4>
                        <p>Proteins</p>
                    </div>
                </div>
            </div>
            <div className={styles.left_over}>
                <h3>Preserving leftover ingredients</h3>
                <div>
                    <p> 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam ac tristique velit, justo, porttitor. Eget mattis a curabitur augue. Pellentesque urna tristique.</p>
                    <p> 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam ac tristique velit, justo, porttitor. Eget mattis a curabitur augue. Pellentesque urna tristique.</p>
                    <p> 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam ac tristique velit, justo, porttitor. Eget mattis a curabitur augue. Pellentesque urna tristique.</p>
                    <p> 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam ac tristique velit, justo, porttitor. Eget mattis a curabitur augue. Pellentesque urna tristique.</p>
                </div>
            </div>
            <Main/>
      
    </div>
  )
}

export default Blog
