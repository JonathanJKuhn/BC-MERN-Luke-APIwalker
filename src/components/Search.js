import  React,{ useState } from 'react'
import { Form,Button,Row,Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState('')
    const [id, setId] = useState(0)

    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    }

    const handleIdChange = (e) => {
        setId(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/${search}/${id}`)
    }

  return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col sm={7}>
                    <Form.Group as={Row} controlId='formSearchSelect' className='mb-5'>
                        <Form.Label column sm={3}>Search for:</Form.Label>
                        <Col sm={9}>
                            <Form.Select aria-label='Search for' onChange={handleSearchChange}>
                                <option value='people'
                                selected={search === 'people'? true : false}
                                >people</option>
                                <option value='planets'
                                selected={search === 'planets'? true : false}
                                >planets</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>
                </Col>
                <Col sm={2}>
                    <Form.Group as={Row} controldID='formSearchIdInput'>
                        <Form.Label column sm={2}>ID:</Form.Label>
                        <Col sm={9}>
                            <Form.Control type='number' onChange={handleIdChange} />
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