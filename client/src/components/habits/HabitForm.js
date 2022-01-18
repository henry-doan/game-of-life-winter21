import { useState, useEffect } from 'react';

const HabitForm = ({id, title, notes, add_sub, dif_level, tags, frequency, updateHabit, addHabit}) => {
  const [habit, setHabit ] = useState({ title: '', notes: '', add_sub: false, dif_level: '', tags: '', frequency: ''})


useEffect( () => {
  if (id) {
    setHabit({ title, notes, add_sub, dif_level, tags, frequency})
  }
},  [])

const handleSubmit = (e) => {
  e.preventDefault()
  if (id) {
    updateHabit(id, habit)
  } else {
    addHabit(habit)
  }
  setHabit({ title: '', notes: '', add_sub: false, dif_level: '', tags: '', frequency: ''})
}


return (
  <>
    <form onSubmit={handleSubmit}>
      <label>Habit:</label>
      <input 
        type="text"
        name="title"
        value={habit.title}
        onChange={(e) => setHabit({ ...habit, title: e.target.value})}
        required
      />
      <label>Note:</label>
      <input 
        type="text"
        name="notes"
        value={habit.notes}
        onChange={(e) => setHabit({ ...habit, notes: e.target.value})}
        required
      />
      <fieldset>
      <input
        type="radio"
        id="positive"
        name="add_sub"
        value={habit.add_sub}
        onChange={(e) => setHabit({ ...habit, add_sub: e.target.value})}
        selected
     />
    <label for="positive">+</label>
     <input
        type="radio"
        id="negative"
        name="add_sub"
        value={habit.add_sub}
        onChange={(e) => setHabit({ ...habit, add_sub: e.target.value})}
     />
    <label for="negative">-</label>
    </fieldset>

      <select id="dif_level" name="dif_level" 
      onChange={(e) => setHabit({ ...habit, dif_level: e.target.value})}> 
        <option value='Easy' selected>Easy</option>
        <option value='Medium'>Medium</option>
        <option value='Difficult'>Difficult</option>
      </select>

      <label>Tags</label>
      <input
        type="text"
        id="tags"
        name="tags"
        value={habit.tags}
        onChange={(e) => setHabit({ ...habit, tags: e.target.value})}
        />

      <label>Reset Counter</label>
      <select id="frequency" name="frequency" 
      onChange={(e) => setHabit({ ...habit, frequency: e.target.value})}> 
        <option value='Daily' selected >Daily</option>
        <option value='Weekly'>Weekly</option>
        <option value='Monthly'>Monthly</option>
        <option value='Annually'>Annually</option>
      </select> 
      <button type="submit">Submit</button>

    </form>

  </>
  )
}

export default HabitForm;