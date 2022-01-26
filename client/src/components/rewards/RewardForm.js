import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

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
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" >
          <Form.Label>Award Name</Form.Label>
          <Form.Control
            type="text"
            name="award"
            value={reward.award}
            onChange={(e) => setReward({ ...reward, award: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Notes</Form.Label>
          <Form.Control
            type="text"
            name="notes"
            value={reward.notes}
            onChange={(e) => setReward({ ...reward, notes: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Tags</Form.Label>
          <Form.Control
            type="string"
            name="tags"
            value={reward.tags}
            onChange={(e) => setReward({ ...reward, tags: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Points</Form.Label>
          <Form.Control
            type="text"
            name="points"
            value={reward.points}
            onChange={(e) => setReward({ ...reward, points: e.target.value })}
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

export default RewardForm;