import styles from './App.module.css';
import { default as Home } from './components/Home/Home';
import { default as MeetThePod } from './components/Pod/Pod';
import { default as Projects } from './components/Projects/Projects';
import { default as Nvbar } from './components/Nvbar/Nvbar';
import { default as Footer } from './components/Footer/Footer';
import {default as ContactForm} from './components/Contacts/Contacts';
import {Container} from 'react-bootstrap';

function App() {
  return (
    <>
      <Nvbar />
      <Container fluid>
          <Home />
          <MeetThePod />
          <Projects />
          <div className={styles.f_center}>
            <ContactForm />
          </div>
          <Footer />
      </Container>
    </>
  );
}

export default App;

