import { useState, useEffect } from 'react';
// import { Form, Button } from 'react-bootstrap';

const RewardForm = ({ addReward, id, award, points, notes, tags, updateReward }) => {
  const [reward, setReward] = useState({ award: '', points: 0, notes: '', tags: '' })

  useEffect(() => {
    if (id) {
      setReward({ award, points, notes, tags })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateReward(id, reward)
    } else {
      addReward(reward)
    }
    setReward(({ award: '', points: 0, notes: '', tags: '' }))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        
          <label>Award Name</label>
          <input
            type="text"
            name="award"
            value={reward.award}
            onChange={(e) => setReward({ ...reward, award: e.target.value })}
          />
        
        
          <label>Notes</label>
          <input
            type="text"
            name="notes"
            value={reward.notes}
            onChange={(e) => setReward({ ...reward, notes: e.target.value })}
          />
        
       
          <label>Tags</label>
          <input
            type="string"
            name="tags"
            value={reward.tags}
            onChange={(e) => setReward({ ...reward, tags: e.target.value })}
          />
        
       
          <label>Points</label>
          <input
            type="text"
            name="points"
            value={reward.points}
            onChange={(e) => setReward({ ...reward, points: e.target.value })}
          />
        
        <button type="submit">
          Submit
        </button>
      </form>
      <br />
    </>
  )
}

export default RewardForm;