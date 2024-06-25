
import React from 'react';
import  styles from './Login.module.css';
import gogo from '../Landing_Image/gogo.png';
import login from '../Landing_Image/log-inadd.png';
import auth from '../Landing_Image/auth.jpg';
// import { AiOutlineMail } from 'react-icons/ai';
// import styles from '../Landing_page/Home.module.css';ss
import { AiOutlineUser } from 'react-icons/ai';
import { Link} from 'react-router-dom';
import { MdSend,} from 'react-icons/md';

const Login = () => {

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
    <div className={styles.containers}>
        <header className={ styles.container_header}>
            <div className={ styles.header_logo}>
                <img src={gogo} alt='Logo'/>

            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/about' className={styles.conc}>about us</Link>
                    </li>
                    <li onClick={Open}>recipes</li>
                    <li>
                        <Link to='/blog' className={styles.conc}>blogs</Link>
                    </li>
                </ul>
            </nav>
            <div className={ styles.container_auth}>
                <p>login <img src={login} alt='icon'/></p>
                <button><AiOutlineUser/> register</button>
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
        <div className={styles.container_form}>
            <img src={auth} alt='authentication image' className={styles.container_image}/>
            <div className={styles.container_border}>
                <form>
                    <h3>register to do more</h3>
                    <AiOutlineUser className={styles.userAccount}/>
                    <div className={styles.container_input}>
                        <input type='emial' placeholder= 'enter your email here' />
                        <button className={styles.btn_btn}><MdSend/></button>
                    </div>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Login
