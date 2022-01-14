import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const RewardForm = ({ addReward, id, award, points, updateReward }) => {
  const [reward, setReward] = useState({ award: '', points: 0 })

  useEffect(() => {
    if (id) {
      setReward({ award, points })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateReward(id, reward)
    } else {
      addReward(reward)
    }
    setReward({ award: '', points: 0 })
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
        <Form.Group className="mb-3">
          <Form.Label>Points</Form.Label>
          <Form.Control
            type="integer"
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