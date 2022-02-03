import styled from 'styled-components';
import { Navbar, NavItem, Button } from 'react-materialize';
import { Link } from 'react-router-dom';

export const RewardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 250px;
  background: white;
  border-radius: 20px;
  margin: 10px 10px;
`
export const RewardPlusBtn = styled(Button)`
  flex-grow: 1;
  width: 33%;
  height: 110px;
  background: #E1E6AE;
  border-radius: 0 20px 20px 0;
`
export const RewardContent = styled(Link)`
  flex-grow: 1;
  width: 33%;
  height: 100px;
  padding: 35px 15px;
  margin: 5px;
`

export const RewardItem = styled.div`
  flex-grow: 1;
  margin: 8px -10px;
  color: #000;
  font-size: 24px;
`