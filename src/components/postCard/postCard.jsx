import Image from "next/image"
import styles from './postCard.module.css'
import Link from "next/link"

function postCard() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/19457037/pexels-photo-19457037/free-photo-of-street-by-palais-garnier-in-paris-france.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill className={styles.img} />
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus laboriosam natus iusto nulla? Quae, officiis exercitationem possimus pariatur atque cumque inventore aliquid, cupiditate quam facilis, odio qui a vero necessitatibus.</p>
                <Link href="/blog/post">READ MORE</Link>
            </div>
        </div>
    )
}

export default postCard