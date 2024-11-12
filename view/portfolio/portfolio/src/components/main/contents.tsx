import React from "react"
import styles from "./main.module.css"
 const Cont=()=>{
   return(
    <div className={styles.content}>
        <h2>
            Contents
        </h2>
       
            <dl className={styles.contlist}>
                <dt >
                My profile
                </dt>
                <dt>
                Skill
                </dt>
                <dt>
                Address
                </dt>
                <dt>
                Hobby
                </dt>
            </dl>
      
    </div>
   );
};

export  {Cont};


    
  