import styled from 'styled-components';
import { Navbar, NavItem, Button } from 'react-materialize';
import { Link } from 'react-router-dom';

export const HabitWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const HabitMinusBtn = styled(Button)`
  flex-grow: 1;
  width: 33%;
  height: 100px;
  background: #FC5A5A;
  border-radius: 20px 0 0 20px;
`
export const HabitPlusBtn = styled(Button)`
  flex-grow: 1;
  width: 33%;
  height: 100px;
  background: #3DD598;
  border-radius: 0 20px 20px 0;
`
export const HabitContent = styled(Link)`
  flex-grow: 1;
  width: 33%;
  height: 100px;
`