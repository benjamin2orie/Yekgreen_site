import React from "react";
import { Link } from "react-router-dom";
import styles from "../Landing_page/Home.module.css";
import SugSection from "./SugSection";
import gogo from "../Landing_Image/gogo.png";
import login from "../Landing_Image/log-inadd.png";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";

const Home = () => {
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
    <div>
      <div className={styles.container}>
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
            <Link to="/Login" className={styles.conc_auth}>
              Login <img src={login} alt="icon" />
            </Link>
            <Link to="Register" className={styles.button}>
              <AiOutlineUser /> register
            </Link>
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
        <div className={styles.container_section}>
          <section className={styles.section_bg}>
            <p>Learn to cook</p>
            <p className={styles.para}>healthy</p>
            <p>Nigerian recipes</p>
            <p className={styles.para2}>
              Ranging from meals to desert to drinks
            </p>
            <div className={styles.search_recipes}>
              <input type="text" placeholder="Serach recipe" />
              <br />
              <button className={styles.btn}>
                <AiOutlineSearch />
              </button>
            </div>
          </section>
          <div className={styles.radius}>
            <div className={styles.radi}></div>
            <div className={styles.radi2}></div>
            <div className={styles.radi2}></div>
            <div className={styles.radi2}></div>
            <div className={styles.radi2}></div>
          </div>
        </div>
      </div>
      <SugSection />
    </div>
  );
};

export default Home;
