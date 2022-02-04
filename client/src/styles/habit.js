import styled from 'styled-components';
import { Navbar, NavItem, Button } from 'react-materialize';
import { Link } from 'react-router-dom';

export const HabitWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`
export const HabitMinusBtn = styled(Button)`
  flex-grow: 0;
  width: 1%;
  height: 100px;
  background: #FC5A5A;
  border-radius: 20px 0 0 20px;
  &:hover {
    background: #F55858;
  }
`
export const HabitPlusBtn = styled(Button)`
  flex-grow: 0;
  width: 1%;
  height: 100px;
  background: #3DD598;
  border-radius: 0 20px 20px 0;
  &:hover {
    background: #3CCF94;
  }
`
export const HabitContent = styled(Link)`
  flex-grow: 1;
  width: 40%;
  height: 100px;
  padding: 10px 30px 0px 30px;
`

export const HabitContainer = styled.div`
  padding: 15px;
  border: 2.6px #F5F5F5 solid;
  border-radius: 20px;
  background: #FCFFFF;
`
export const pTag = styled.p`
  fontSize: 30px;
`