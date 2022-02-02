import styled from 'styled-components';
import { Navbar, NavItem, Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';

export const GameNav = styled(Navbar)`
  background: white;
  height: 80px;
  z-index: 0;
`

export const GameNavItemPrime = styled(Link)`
  transition: background-color .3s;
  font-size: 1rem;
  color: #fff;
  display: block;
  padding: 0 30px;
  cursor: pointer;
  margin: 5px 5px 5px 5px;
  background: #2B59C3;
  border-radius: 10px;
`

export const GameNavItemSecondary = styled(Link)`
  transition: background-color .3s;
  font-size: 1rem;
  color: grey;
  display: block;
  padding: 0px 30px;
  cursor: pointer;
  margin: 5px 15px 5px 5px;
  background: #F1F1F5;
  border-radius: 10px;
`

export const NotificationIcon = styled(Icon)`
  color: #000;
`

export const NotificationItem = styled(Link)`
  display: block;
  padding: 0px 30px;
  cursor: pointer;
  margin: 5px 15px 5px 5px;
`

export const ImageItem = styled.img`
  border-radius: 50px;
  width: 50px;
`
export const LinkImage = styled(Link)`
  color: grey;
  display: block;
  padding: 0px 30px;
  cursor: pointer;
  margin: 5px 15px 5px 5px;
  border-radius: 50px;
`

export const MainContainer = styled.div`
  margin-left: 600px;
`

