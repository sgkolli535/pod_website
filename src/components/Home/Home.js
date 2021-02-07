import styles from './Home.module.css';

function Home() {
  return (
    <div id="home" className={styles.home1}>
      <div className={styles.clearfloat}></div>
      <img src="bg.png" alt="olaf" />
      <span className={styles.head} style={{color: '#1A46E3', fontWeight: 'bold'}}>Open-Sourced Olaf</span>
    </div>
  );
}

export default Home;

