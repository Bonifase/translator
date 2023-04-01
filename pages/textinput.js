import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import styles from '../styles/Home.module.css';

function TextInput() {
    const languages = ['Dholuo', 'Swahili', 'Kikuyu']
  return (
    <Container>
      <Row>
        <Col xs={6}>
        <Form.Group className="mb-3">
            <Form.Select>
                <option>Input Language</option>
                {languages.map(language => <option>{language}</option>)}
            </Form.Select>
            <InputGroup>
                <InputGroup.Text></InputGroup.Text>
                <Form.Control className={styles.display} as="textarea" aria-label="With textarea" />
            </InputGroup>
        </Form.Group>
        </Col>
        <Col xs={6}>
            <Form.Select>
                <option>Output Language</option>
                {languages.map(language => <option>{language}</option>)}
            </Form.Select>
            <InputGroup>
                <InputGroup.Text></InputGroup.Text>
                <Form.Control className={styles.display} as="textarea" aria-label="With textarea" />
            </InputGroup>
        </Col>
        <Button variant="secondary" type="submit">
            Submit
        </Button>
      </Row>
    </Container>
  );
}


export default TextInput;