import Head from 'next/head'
import Image from 'next/image'
import styles from './IDdesign.module.scss'
import profilePic from './defaultPic.jpg'

export default function IdCard(props) {
    return (
        <div className={styles.container}>
            <div className={styles.center + " " + styles["flex-column"]}>
                <div className={styles.card + " " + styles["flex-row"] + " " + styles.open}>
        <div className={styles.book}>
            <Image
              src={profilePic}/>
        </div>
        

          
          <div className={styles["flex-column"] + " " + styles.info}>
            <div className={styles.title}>{props.name}</div>
            <div className={styles.author}>{props.profession}</div>
            {/* <div className={styles.hidden + " " + styles.bottom + " " + styles.summary}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod ratione impedit temporibus maiores autem aperiam assumenda exercitationem, quisquam nobis esse.
            </div> */}
          </div>
          <div className={styles["flex-column"] + " " + styles.group}>
            <div className={styles.members}>
              <span className={styles.current}>14</span> /
              <span className={styles.max}>30</span>
            </div>
            <div className={styles.hidden + " " + styles.bottom}>
              <button className={styles.simple}>Book</button>
            </div>
          </div>
        </div>
        </div>
        </div>
    // <div className={styles.idCard}>
    //     <div className={styles.content}>
    //         {props.name}

    //     </div>
    // </div>
    // <div className ={styles.cardContainer}>
    // <div className={styles.card}>
    //   <div className ={styles.title}>
    //   Card 1
    //   </div>
    //   <div className ={styles.description}>
    //   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //   </div>
    // </div>

    // <div className={styles.card}>
    //   <div className ={styles.title}>
    //  Card 2
    //   </div>
    //   <div className ={styles.description}>
    //   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //   </div>
    // </div>

    // <div className={styles.card}>
    //   <div className ={styles.title}>
    //   Card 3
    //   </div>
    //   <div className ={styles.description}>
    //   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //   </div>
    // </div>
    // </div>
    )
}