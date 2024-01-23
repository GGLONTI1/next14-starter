import Image from "next/image"
import styles from "./singlePost.module.css"

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong")
  }

  return res.json();
};


const SinglePostPage = async ({params}) => {
  const {slug} = params;
  const post = await getData(slug);
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
        <h1 className={styles.title}>{post.title}</h1>
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
            <span className={styles.datailVslue}>{post.id}</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.datailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
        {post.body}
        </div>
      </div>
    </div>
  );
}

export default SinglePostPage