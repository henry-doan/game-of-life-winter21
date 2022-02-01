import { useState, useEffect } from 'react';
// import { Form, Button } from 'react-bootstrap';


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
      setAdd(false)
    }
    setChecklistItem({ name: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3" >
          <label>ChecklistItem Name:</label>
          <input 
            type="text"
            name="name"
            value={checklistitem.name}
            onChange={(e) => setChecklistItem({ ...checklistitem, name: e.target.value })} 
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

export default ChecklistItemForm;