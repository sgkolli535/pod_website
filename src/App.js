import styles from './App.module.scss';
import { default as Home } from './components/Home/Home';
import { default as MeetThePod } from './components/Pod/Pod';
import { default as Projects } from './components/Projects/Projects';
import { default as Nvbar } from './components/Nvbar/Nvbar';
import { default as Footer } from './components/Footer/Footer';
import { default as ContactForm } from './components/Contacts/Contacts';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className={styles.block}>
        <div className={styles.mainPage}>
          <Nvbar />
          <Container fluid className={styles.allContainer}>
            <Home />
            <div className={styles.newPageComingUp} />

            <MeetThePod />
            <div className={styles.newPageComingUp} />
            <Projects />
            <div className={styles.newPageComingUp} />
            <div className={styles.f_center}>
              <ContactForm />
            </div>
            <div className={styles.newPageComingUp} />
            <Footer />
          </Container>
        </div>
      </div>
    </>
  );
}

export default App;

