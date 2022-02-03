import { useState, useEffect } from 'react';
import { RewardFormStyle, RewardLabel, InputSlot, RewardFormChild, RewardCoinImg, RewardButton } from '../../styles/shared';
import { StyledComponent } from 'styled-components';
import GoldCoin from '../../images/GoldCoin.png';
import { useNavigate } from 'react-router-dom';

const RewardForm = ({ addReward, id, award, points, notes, tags, updateReward }) => {
  const [reward, setReward] = useState({ award: '', points: 0, notes: '', tags: '' })

  useEffect(() => {
    if (id) {
      setReward({ award, points, notes, tags })
    }
  }, [])

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateReward(id, reward)
    } else {
      addReward(reward)
    }
    setReward(({ award: '', points: 0, notes: '', tags: '' }))
    navigate('/dashboard')
  }

  return (
    <>
      <RewardFormStyle onSubmit={handleSubmit}>
        
          <RewardLabel>Title*</RewardLabel>
          <InputSlot
            type="text"
            name="award"
            value={reward.award}
            onChange={(e) => setReward({ ...reward, award: e.target.value })}
          />
        
        
          <RewardLabel>Notes</RewardLabel>
          <InputSlot
            type="text"
            name="notes"
            value={reward.notes}
            onChange={(e) => setReward({ ...reward, notes: e.target.value })}
          />
        
       
          <RewardLabel>Tags</RewardLabel>
          <InputSlot
            type="string"
            name="tags"
            value={reward.tags}
            onChange={(e) => setReward({ ...reward, tags: e.target.value })}
          />
        
        <br />
        <br />
          <RewardLabel>Points</RewardLabel>
          <RewardCoinImg src={GoldCoin} /><InputSlot
            type="text"
            name="points"
            value={reward.points}
            onChange={(e) => setReward({ ...reward, points: e.target.value })}
            
          />
   
        <RewardButton type="submit">
          Save
        </RewardButton>
        
      </RewardFormStyle>
      <br />
    </>
  )
}


export default RewardForm;