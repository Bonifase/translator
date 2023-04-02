import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { useState } from "react";
import axios from "axios";

import styles from '../styles/Home.module.css';

function TextInput() {
    const languages = ['Dholuo', 'Swahili', 'Kikuyu'];
    const [intputData, setIntputData] = useState({
        source: '',
        target: '',
        text: ''
    });
    const [translatedCode, setTranslatedCode] = useState("");

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/translate/', intputData)
            setTranslatedCode(res.data.target)
        } catch (err) {
            console.dir(err)
        }
    }

    const onTextInput = e => {
        e.preventDefault();
        const newData = {...intputData}
        newData[e.target.name] = e.target.value;
        setIntputData(newData);
    }
  return (
    <Container>

      <form onSubmit={onSubmit}>
      <Row >
            <Col xs={6}>
                <Form.Group className="mb-3">
                    <Form.Select
                    name="source"
                    value={intputData.source}
                    onChange={(e) => onTextInput(e)}
                    >
                        <option>Select Input language</option>
                        {languages.map((language, key) => <option key={key}>{language}</option>)}
                    </Form.Select>
                    <InputGroup>
                        <Form.Control
                            name="text"
                            value={intputData.text}
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
                    name="target"
                    value={intputData.target}
                    onChange={(e) => onTextInput(e)}
                    >
                    <option>Output Language</option>
                    {languages.map((language, key) => <option key={key}>{language}</option>)}
                </Form.Select>
                <InputGroup>
                    <Form.Control
                            name="outputText"
                            value={translatedCode}
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