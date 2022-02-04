import { useState, useEffect } from 'react';
import { BlackLabel, InputSlot, RewardButton, AddSub } from '../../styles/shared';
import { Select } from 'react-materialize';

const HabitForm = ({ id, title, notes, add_option, sub_option, dif_level, tags, frequency, updateHabit, addHabit}) => {
  const [habit, setHabit ] = useState({ title: '', notes: '', add_option: false, sub_option: false, dif_level: 'Easy', tags: '', frequency: 'Daily'})


useEffect( () => {
  if (id) {
    setHabit({ title, notes, add_option, sub_option, dif_level, tags, frequency})
  }
},  [])

const handleSubmit = (e) => {
  e.preventDefault()
  if (id) {
    updateHabit(id, habit)
  } else {
    addHabit(habit)
  }
  setHabit({ title: '', notes: '', add_option: false, sub_option: false, dif_level: 'Easy', tags: '', frequency: 'Daily'})
}


return (
  <>
    <form onSubmit={handleSubmit}>
      <BlackLabel>Habit:</BlackLabel>
      <InputSlot 
        type="text"
        name="title"
        value={habit.title}
        onChange={(e) => setHabit({ ...habit, title: e.target.value})}
        required
      />
      <BlackLabel>Note:</BlackLabel>
      <InputSlot 
        type="text"
        name="notes"
        value={habit.notes}
        onChange={(e) => setHabit({ ...habit, notes: e.target.value})}
        required
      />
      <AddSub onClick={() => setHabit({ ...habit, add_option: !habit.add_option})}>
        +
      </AddSub>
      <AddSub onClick={() => setHabit({ ...habit, sub_option: !habit.sub_option})}>
        -
      </AddSub>  
      <br />
      <BlackLabel>Difficulty Level</BlackLabel>
      <Select
        id="diff_levels"
        multiple={false}
        onChange={(e) => setHabit({ ...habit, diff_levels: e.target.value})}
        options={{
          classes: '',
          dropdownOptions: {
            alignment: 'left',
            autoTrigger: true,
            closeOnClick: true,
            constrainWidth: true,
            coverTrigger: true,
            hover: false,
            inDuration: 150,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 250
          }
        }}
        value=""
      >
        <option
          disabled
          value=""
        >
          Choose your option
        </option>
        <option value="Easy">
          Easy
        </option>
        <option value="Medium">
          Medium
        </option>
        <option value="Difficult">
          Difficult
        </option>
      </Select>


      <BlackLabel>Tags</BlackLabel>
      <InputSlot
        type="text"
        id="tags"
        name="tags"
        value={habit.tags}
        onChange={(e) => setHabit({ ...habit, tags: e.target.value})}
        />

      <BlackLabel>Reset Counter</BlackLabel>
      
      <Select
        id="frequency"
        multiple={false}
        onChange={(e) => setHabit({ ...habit, frequency: e.target.value})}
        options={{
          classes: '',
          dropdownOptions: {
            alignment: 'left',
            autoTrigger: true,
            closeOnClick: true,
            constrainWidth: true,
            coverTrigger: true,
            hover: false,
            inDuration: 150,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 250
          }
        }}
        value=""
      >
        <option
          disabled
          value=""
        >
          Choose your option
        </option>
        <option value="Daily">
          Daily
        </option>
        <option value="Weekly">
          Weekly
        </option>
        <option value="Monthly">
          Monthly
        </option>
        <option value="Annually">
          Annually
        </option>
      </Select>

      <RewardButton type="submit">Submit</RewardButton>

    </form>

  </>
  )
}

export default HabitForm;