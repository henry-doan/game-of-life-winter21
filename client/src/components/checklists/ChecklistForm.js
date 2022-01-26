import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const ChecklistForm = ({ addChecklist, taskId, id, name, updateChecklist, setEdit, setAdd}) => {
  const [checklist, setChecklist] = useState({ name: '' })

  useEffect( () => {
    if (id) {
      setChecklist({ name })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateChecklist(taskId, id, checklist)
      setEdit(false)
    } else {
      addChecklist(taskId, checklist)
    }
    setChecklist({ name: '' })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" >
          <Form.Label>Checklist Name:</Form.Label>
          <Form.Control 
            type="text"
            name="name"
            value={checklist.name}
            onChange={(e) => setChecklist({ ...checklist, name: e.target.value })} 
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <br />
    </>
  )
}

export default ChecklistForm;