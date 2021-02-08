import styles from './App.module.scss';
import { default as Home } from './components/Home/Home';
import { default as MeetThePod } from './components/Pod/Pod';
import { default as Projects } from './components/Projects/Projects';
import { default as Nvbar } from './components/Nvbar/Nvbar';
import { default as Footer } from './components/Footer/Footer';
import { default as ContactForm } from './components/Contacts/Contacts';
import { default as Gallary } from './components/Gallery/Gallery';
import { Container } from 'react-bootstrap';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnimatedBackground: false,
    }
    this.toggleAnimatedBackground = this.toggleAnimatedBackground.bind(this);
  }

  toggleAnimatedBackground(e) {
    e.preventDefault();
    this.setState({ showAnimatedBackground: !this.state.showAnimatedBackground })
    console.log(this.state.showAnimatedBackground)
  }

  render() {
    return (
      <>
        <div className={this.state.showAnimatedBackground ? styles.block : ""}>
          <Nvbar showAnimatedBackground={this.state.showAnimatedBackground} toggleAnimatedBackground={this.toggleAnimatedBackground} />
          <Container fluid>
            <Home />

            <div className={styles.newPageComingUp} />

            <MeetThePod />

            <div className={styles.newPageComingUp} />

            <Gallary />

            <div className={styles.newPageComingUp} />

            <Projects />

            <div className={styles.newPageComingUp} />


            <div className={styles.f_center}>
              <ContactForm />
            </div>
          </Container>
          <Footer />
        </div>
      </>
    );
  }

}

export default App;

