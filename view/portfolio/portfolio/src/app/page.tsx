import React, { useEffect, useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import { FaHtml5 } from "react-icons/fa";
import { Cont } from "@/components/main/contents";
import { Mypro } from "@/components/main/Mypro";
import { Skills } from "@/components/main/skill";
import { Address } from "@/components/main/address";
import { Hobby } from "@/components/main/Hobby";
import { Header } from "@/components/header/header";
import comstyles from "./pagecom.module.css"
import Layoutt from "../components/layouts/layout"
/* SW anime id
<div id="titles"><div id="titlecontent"></div>
</div>
*/

export default function Home() {
  return (
    
    <div className={styles.main}>
      <Layoutt>

      <div className={styles.contstyle}>
        <Cont />
        </div>

        <div className={comstyles.main}>

          <dl className={comstyles.numberlist}>
          <div className={comstyles.mypro}>
            <h2>
              <dt className={comstyles.title}>My profile</dt>
            </h2>
            <dd><Mypro/></dd>
          </div>

          <div className={comstyles.skill}>
            <h2>
              <dt className={comstyles.title}>Skill</dt>
            </h2>
            <dd><Skills/></dd>
          </div>

           <div className={comstyles.ad}>
            <h2>
              <dt className={comstyles.title}>Address</dt>
            </h2>
            <dd><Address/></dd>
          </div>
          
          <div className={comstyles.hob}>
            <h2>
              <dt className={comstyles.title}>Hobby</dt>
            </h2>
            <dd><Hobby/></dd>
          </div> 
          
          </dl>
       
          </div>
      
      <div className="space"></div>
      </Layoutt>
      
    </div>
   
    
  );

}


// export default function Home() {
//   return (
    
//     <div className={styles.main}>
//       <Header/>
//       <div id="titles">
//         <div id="titlecontent"></div>
//         <Cont />
        
//           <ol className={comstyles.numberlist}>
//           <Mypro/>
//           <Skills/>
//           <Address/>
//           <div className={comstyles.hob}>
//           <h2>
//             <li>
//               Hobby
//             </li>
//          </h2>
//           <Hobby/>
//           </div>
          
//           </ol>
       
      
//       </div>
//       <div className="space"></div>
//     </div>
   
    
//   );
// }




