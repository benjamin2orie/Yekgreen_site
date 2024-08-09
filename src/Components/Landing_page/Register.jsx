import React from "react";
import styles from "./Login.module.css";
import gogo from "../Landing_Image/gogo.png";
import login from "../Landing_Image/log-inadd.png";
import auth from "../Landing_Image/auth.jpg";
import { MdOutlineMail } from "react-icons/md";
import { LuLock } from "react-icons/lu";
import { AiOutlineUser } from "react-icons/ai";
import Apple from "../Landing_Image/apple.png";
import Path from "../Landing_Image/Pathf.png";
import Search from "../Landing_Image/search.png";
import { Link } from "react-router-dom";
import Login from "./Login";

const Register = () => {
  const Open = () => {
    let main = document.getElementById("main");
    main.style.width = "250px";
    main.style.display = "block";
  };

  const Close = () => {
    let main = document.getElementById("main");
    main.style.width = "0";
    main.style.display = "none";
  };

  return (
    <div className={styles.containers}>
      <header className={styles.container_header}>
        <div className={styles.header_logo}>
          <img src={gogo} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/about" className={styles.conc}>
                about us
              </Link>
            </li>
            <li onClick={Open}>recipes</li>
            <li>
              <Link to="/blog" className={styles.conc}>
                blogs
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.container_auth}>
          <Link to="/login" className={styles.conc_auth}>
            login <img src={login} alt="icon" />
          </Link>
          <button>
            <AiOutlineUser /> register
          </button>
        </div>
      </header>
      <div id="main" className={styles.drop}>
        <li className={styles.open_btn} onClick={Close}>
          &times;
        </li>
        <li>
          <Link to="/breakfast">breakfast</Link>
        </li>
        <li>
          <Link to="/lunch">lunch</Link>
        </li>
        <li>
          <Link to="/dinner">dinner</Link>
        </li>
      </div>
      <div className={styles.container_form}>
        <img
          src={auth}
          alt="authentication image"
          className={styles.container_image}
        />
        <div className={styles.container_border}>
          <form>
            <h3>Register to do more</h3>
            {/* <AiOutlineUser className={styles.userAccount} /> */}
            <div className={styles.container_input}>
              <MdOutlineMail className={styles.mailIcon} />
              <input type="emial" placeholder="email" />
            </div>
            <LuLock className={styles.lock} />
            <input
              type="password"
              placeholder="password"
              className={styles.password}
            />
            <input
              type="submit"
              value={"Signup with Email"}
              className={styles.more}
            />
          </form>
          <div className={styles.border}>
            <div className={styles.grey_border}></div>
            <p>or with</p>
            <div className={styles.grey_border}></div>
          </div>

          <div className={styles.media}>
            <div className={styles.container_media}>
              <img src={Apple} alt="apple icon" />
            </div>
            <div className={styles.container_media}>
              <img src={Path} alt="facebook icon" />
            </div>
            <div className={styles.container_media}>
              <img src={Search} alt="google icon" />
            </div>
          </div>
          <span>
            have an account?
            <Link className={styles.ddd} to="/login">
              Login here
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
