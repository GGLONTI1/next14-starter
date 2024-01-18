import Image from "next/image"
import styles from "./singlePost.module.css"

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/19457037/pexels-photo-19457037/free-photo-of-street-by-palais-garnier-in-paris-france.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          fill
          className={styles.img}
        />
        </div>
        <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/19457037/pexels-photo-19457037/free-photo-of-street-by-palais-garnier-in-paris-france.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={30}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.datailVslue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.datailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis sequi laudantium at! Harum molestias iure nulla sed necessitatibus. Laboriosam maxime reiciendis id? Rem rerum perspiciatis ea unde dolore suscipit laborum!
        </div>
      </div>
    </div>
  );
}

export default SinglePostPage