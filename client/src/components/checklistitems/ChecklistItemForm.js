import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const ChecklistItemForm = ({ addChecklistItem, checklistId, id, name, updateChecklistItem, setEdit, setAdd}) => {
  const [checklistitem, setChecklistItem] = useState({ name: '' })

  useEffect( () => {
    if (id) {
      setChecklistItem({ name })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateChecklistItem(checklistId, id, checklistitem)
      setEdit(false)
    } else {
      addChecklistItem(checklistId, checklistitem)
    }
    setChecklistItem({ name: '' })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" >
          <Form.Label>ChecklistItem Name:</Form.Label>
          <Form.Control 
            type="text"
            name="name"
            value={checklistitem.name}
            onChange={(e) => setChecklistItem({ ...checklistitem, name: e.target.value })} 
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

export default ChecklistItemForm;