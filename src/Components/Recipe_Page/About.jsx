
import { AiOutlineUser } from 'react-icons/ai';
import Logo from '../Landing_Image/gogo.png';
import { FiFileText } from 'react-icons/fi';
import styles from './About.module.css';
import usersA from '../Recipes_Images/usersA.png';
import About_iamge from '../Recipes_Images/About.jpg';
import Footer from '../Landing_page/Footer';
import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {

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
                    <li>about us</li>
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
        <img src={usersA} alt='burger'/>
        <h3>About us</h3>
      </div>
      <div className={styles.dev}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim eget aliquet feugiat scelerisque senectus aliquet. Risus ante in elit suscipit nisi. Interdum et et iaculis nibh etiam commodo mattis fermentum. Libero, ipsum egestas non tincidunt gravida blandit vel semper mi. Amet, ac tristique purus interdum dictumst mollis dignissim lacus. Etiam a, nisl ut eleifend ultricies. Scelerisque lacus sit pharetra, et semper est curabitur aliquet cursus. Malesuada etiam egestas eu pharetra enim nisi malesuada duis. Malesuada duis nullam mattis nunc. Magna sit consectetur vitae id elementum aliquam mattis augue enim. Faucibus orci tellus est, maecenas consectetur enim habitant id. Duis quam tellus laoreet libero, scelerisque donec a.</p>
        <p>Eget integer tellus pretium vestibulum egestas tellus varius id. Netus sed penatibus at sed augue amet arcu, blandit euismod. Tempus praesent quam enim risus lorem lorem id interdum. Tellus mi vitae eget enim eget et. Aliquet sed donec odio sodales consectetur elementum. Sed eleifend cursus ac convallis volutpat. Diam lacus, sed ut sit. Vitae felis posuere maecenas fringilla sed nunc tortor. Suspendisse tempus, vitae cursus amet amet sed. Purus, vel aliquet condimentum id justo, egestas dui nibh odio. Aliquet in nisl morbi tellus. Quis ut parturient dolor dictum. Pellentesque lectus tortor vitae tempor et phasellus donec.</p>
      </div>

      <div className={styles.container_image}>
        <img src={About_iamge} alt='picture'/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus sed sit leo a nulla et lacinia quam. Habitant imperdiet eros, quisque amet. Posuere in fermentum tellus pretium neque, sollicitudin nibh nullam. Leo volutpat pellentesque tortor, massa diam amet, sit. Volutpat aenean id magna egestas tristique. Rhoncus eget congue et ridiculus nisi. </p>
      </div>
      <Footer/>
    </div>
  )
}

export default About
