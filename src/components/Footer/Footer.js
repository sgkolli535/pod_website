import styles from './Footer.module.css';

function Footer(){
  return(
    <div className={styles.foot}>
      <span className={styles.power}>Powered by</span>
      <img src="/mlh.svg" className={styles.icon}></img>
    </div>
  )
}

export default Footer;