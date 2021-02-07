import styles from './Pod.module.css';
import  {Container} from 'react-bootstrap';
import PodCard from './PodCard/PodCard';
import * as profile_data from '../../_data/teams.json'; 

function MeetThePod() {

  const podList = profile_data.default.map((member,i) => {
    return <PodCard key={i} title={member.title} description={member.name}/>
  });

  return (
    <Container id="meet" className={styles.team}>
      <h1 style={{fontWeight: 'bold'}}>Meet the Pod</h1>
      <div className={styles.team_flex}>
        {podList};
      </div>
    </Container>
  );
}

export default MeetThePod;

