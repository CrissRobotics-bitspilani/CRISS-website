// import React from "react";
// import styles from "./eventcard.module.scss";
// import Tilt from 'react-parallax-tilt';
// import { Link } from 'react-router-dom';

// export default function EventCard({ eventImg, form, eventImg2 }) {

//     return (
//         <>
//             <Tilt>
//                 <div className={styles.card}>
//                     <div className={styles.imgContainer}>
//                         <img src={eventImg} ></img>
//                     </div>
//                     <Link to={form} target="_blank">
//                         <button className={styles.registerButton}>
//                             <a href={form} target="_blank">Register Now!</a>
//                         </button>
//                     </Link>
//                 </div>
//             </Tilt>
//             <div className={styles.mobileCard}>
//                 <div className={styles.imgContainer}>
//                     <img src={eventImg2} ></img>
//                 </div>
//                 <Link to={form} target="_blank">
//                     <button className={styles.registerButton}>
//                         <a href={form} target="_blank">Register Now!</a>
//                     </button>
//                 </Link>
//             </div>
//         </>
//     )
// }

import React from "react";
import styles from "./eventcard.module.scss";

export default function EventCard({ eventImg, form, title, description }) {
  return (
    <div
      className={styles.card}
      onClick={() => window.open(form, "_blank")}
    >
      <img src={eventImg} alt={title || "Event"} />
    </div>
  );
}