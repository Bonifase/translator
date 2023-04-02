import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { useState } from "react";

import styles from '../styles/Home.module.css';

function TextInput() {
    const languages = ['Dholuo', 'Swahili', 'Kikuyu'];
    const [data, setData] = useState({
        inputLanguage: '',
        outPutLanguage: '',
        inputText: '',
        outPutText: ''
    });

    const onSubmit = e => {
        e.preventDefault();
        console.log(data);
    }

    const onTextInput = e => {
        e.preventDefault();
        const newData = {...data}
        newData[e.target.name] = e.target.value;
        setData(newData);
    }
  return (
    <Container>

      <form onSubmit={onSubmit}>
      <Row >
            <Col xs={6}>
                <Form.Group className="mb-3">
                    <Form.Select
                    name="inputLanguage"
                    value={data.inputLanguage}
                    onChange={(e) => onTextInput(e)}
                    >
                        <option>Select Input language</option>
                        {languages.map((language, key) => <option key={key}>{language}</option>)}
                    </Form.Select>
                    <InputGroup>
                        <InputGroup.Text></InputGroup.Text>
                        <Form.Control
                            name="inputText"
                            value={data.inputText}
                            onChange={(e) => onTextInput(e)}
                            className={styles.display}
                            as="textarea"
                            aria-label="With textarea"
                        />
                    </InputGroup>
                </Form.Group>
            </Col>
            <Col xs={6}>
                <Form.Select
                    name="outPutLanguage"
                    value={data.outPutLanguage}
                    onChange={(e) => onTextInput(e)}
                    >
                    <option>Output Language</option>
                    {languages.map((language, key) => <option key={key}>{language}</option>)}
                </Form.Select>
                <InputGroup>
                    <InputGroup.Text></InputGroup.Text>
                    <Form.Control
                            name="outputText"
                            value={data.outputText}
                            onChange={(e) => onTextInput(e)}
                            className={styles.display}
                            as="textarea"
                            aria-label="With textarea"
                    />
                </InputGroup>
            </Col>
            <Button variant="secondary" type="submit">
                Submit
            </Button>
      </Row>
      </form>
    </Container>
  );
}


export default TextInput;