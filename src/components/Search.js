import React from 'react'
import { Form,Button,Row,Col } from 'react-bootstrap'

const Search = () => {
  return (
        <Form>
            <Row>
                <Col sm={7}>
                    <Form.Group as={Row} controlId='formSearchTypeSelect'>
                        <Form.Label column sm={3}>Search for:</Form.Label>
                        <Col sm={9}>
                            <Form.Select aria-label='Search for'>
                                <option value='people'>people</option>
                                <option value='planets'>planets</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>
                </Col>
                <Col sm={2}>
                    <Form.Group as={Row} controldID='formSearchIdInput'>
                        <Form.Label column sm={2}>ID:</Form.Label>
                        <Col sm={9}>
                            <Form.Control type='number' />
                        </Col>
                    </Form.Group>
                </Col>
                <Col sm={3}>
                    <Button type='submit'>Search</Button>
                </Col>
            </Row>
        </Form>
  )
}

export default Search