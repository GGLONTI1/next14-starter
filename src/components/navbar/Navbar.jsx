import styles from './navbar.module.css'
import Links from './links/Links'
import Link from 'next/link'
import { auth } from '@/lib/auth'


const Navbar = async () => {

    const session = await auth();
    console.log(session)
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>Logo</Link>
            <div>
                <Links session={session} />
            </div>
        </div>

    )
}

export default Navbar