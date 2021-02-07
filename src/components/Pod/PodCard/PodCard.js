import {Card, Button, Image} from 'react-bootstrap';
import styles from './PodCard.module.css';

function PodCard(props){
  return (
    <Card style={{ width: '14rem', position:'inherit' }} className={styles.card_set}>
      <Image src="/_podImg/dummy.png" style={{margin: '1.5rem'}} roundedCircle />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary">link</Button>
      </Card.Body>
    </Card>
  )

}

export default PodCard