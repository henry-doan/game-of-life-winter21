import { useState, useEffect } from 'react';
// import { Form, Button } from 'react-bootstrap';

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
      setAdd(false)
    }
    setChecklist({ name: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3" >
          <label>Checklist Name:</label>
          <input
            type="text"
            name="name"
            value={checklist.name}
            onChange={(e) => setChecklist({ ...checklist, name: e.target.value })} 
          />
        </div>
        <button variant="primary" type="submit">
          Submit
        </button>
      </form>
      <br />
    </>
  )
}

export default ChecklistForm;