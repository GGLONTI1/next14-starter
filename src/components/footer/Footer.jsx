import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>LOGO</div>
        <div className={styles.text}>
          Creative thoughts all rights reserved ©
        </div>
      </div>
  )
}

export default Footer