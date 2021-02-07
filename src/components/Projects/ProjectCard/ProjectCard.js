import styles from './ProjectCard.module.css';
import {Row, Col, Badge} from 'react-bootstrap';

function ProjectCard(props){
  const badgeList = ["primary", "secondary", "success", "danger", "warning", "light"];
  return (
    <Row className={styles.r}>
      <Col className={styles.c}>
        <img className={styles.pic} src="/_podImg/dummy.png"/>
      </Col>
      <Col className={styles.c}>
        <div>
          <span className={styles.title}>{props.title}</span>
          <div className={styles.projDes}>
            <span className={styles.des}>Description</span>
            <p>{props.description}</p>
          </div>
          <div>
            <span className={styles.des}>Technologies used</span>
            <p>
              <Badge variant="primary">Primary</Badge>{' '}
            </p>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default ProjectCard;