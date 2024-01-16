import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
    <div className={styles.imgContainer}>
    <Image src="https://images.pexels.com/photos/19685866/pexels-photo-19685866/free-photo-of-woman-wearing-orange-jacket-on-a-balcony.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill/>
    </div>
    </div>
  );
};

export default AboutPage;