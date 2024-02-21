
import React from 'react';
import styles from '../Landing_page/SugSection.module.css';
import Hot from '../Landing_Image/Hot.png';
import Onion from '../Landing_Image/Onion.png';
import Breakfast from '../Landing_Image/Breakfast.jpeg';
import lunch from '../Landing_Image/deks.jpeg';
import dinner from '../Landing_Image/dinner.jpeg';
import Featured from './Featured';
const SugSection = () => {
  return (
    <div>
        <div className={ styles.container}>
            <div className={ styles.sug_icons}>
                <h2>suggestions</h2>
                <img src={Hot} alt='Hot peper'/>
            </div>
            <main className={styles.main_section}>
                <img src={Onion} alt='Onion icon' className={styles.Onion}/>
                <div className={ styles.container_images}>
                    <div>
                        <img src={Breakfast} alt='Breakfast food plate' className={styles.food}/>
                        <h4>breakfast</h4>
                    </div>
                    <div>
                        <img src={lunch} alt='lunch fod plate' className={styles.food}/>
                        <h4>lunch</h4>
                    </div>
                        <div>
                        <img src={dinner} alt='dinner food plate' className={styles.food}/>
                        <h4>dinner</h4>
                    </div>
                </div>
                <div className={styles.bottom_border}></div>
            </main>
        </div>
        <Featured/>
      
    </div>
  )
}

export default SugSection
