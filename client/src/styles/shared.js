import styled from 'styled-components';
import { Navbar, NavItem, Button, Icon, Col, Modal } from 'react-materialize';
import { Link } from 'react-router-dom';


export const GameNav = styled(Navbar)`
  background: white;
  height: 80px;
  z-index: 5;
  padding-left: 300px;
  padding-right: 300px;
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
  margin: 5px 0px 5px 5px;
`

export const ImageItem = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
`
export const LinkImage = styled(Link)`
  color: grey;
  display: block;
  padding: 0px 30px;
  cursor: pointer;
  margin: 10px 5px 5px 0px;
`

export const MainContainer = styled.div`
  margin-left: 400px;
`
export const DashboardCol = styled(Col)`
  border-radius: 50px;
  border: .1em solid grey;
  padding: 20px; 
  margin: 30px;
  width: 25%;
`

//chris's


// export const GameNav = styled(Navbar)`
//   background: white;
//   height: 80px;
// `
export const GameNavImg = styled.img`
  display: block;
  margin: 3px 0px 0px 20px;
  cursor: pointer;
`

//profile button
export const EditButton = styled(Button)`
  display: block;
  margin: 15px;
  background: #512D38;
  &:hover {
    background: #290916;
  }
`
// export const GameNavItemPrime = styled(Link)`
//   transition: background-color .3s;
//   font-size: 1rem;
//   color: #fff;
//   display: block;
//   padding: 0 15px;
//   cursor: pointer;
//   margin-top: 5px;
//   background: #2B59C3;
//   border-radius: 10px;
// `
// export const GameNavItemSecondary = styled(Link)`
//   transition: background-color .3s;
//   font-size: 1rem;
//   color: #fff;
//   display: block;
//   padding: 0 15px;
//   cursor: pointer;
//   height: 40px;
//   margin-top: 15px;
//   background: #F1F1F5;
//   border-radius: 10px;
// `
export const HabitWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`
export const HabitMinusBtn = styled(Button)`
  flex-grow: 0;
  width: 10%;
  height: 140px;
  background: #FC5A5A;
  border-radius: 20px 0 0 20px;
  &:hover {
    background: #F55858;
  }
`
export const HabitPlusBtn = styled(Button)`
  flex-grow: 0;
  width: 10%;
  height: 140px;
  background: #3DD598;
  border-radius: 0 20px 20px 0;
  &:hover {
    background: #3CCF94;
  }
`
export const HabitContent = styled(Link)`
  flex-grow: 1;
  width: 50%;
  height: 140px;
  padding: 10px 30px 0px 30px;
  border: 2.6px #FAFAFA solid;
`

export const HabitContainer = styled.div`
  padding: 15px;
  border: 2.6px #F5F5F5 solid;
  border-radius: 20px;
  background: #FCFFFF;
  width: 20.8rem;
`
export const TaskContainer = styled.div`
  padding: 15px;
  border: 2.6px #F5F5F5 solid;
  border-radius: 20px;
  background: #FCFFFF;
  width: 20.8rem;
`
export const TaskWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`

export const TaskCompleteBtn = styled(Button)`
  flex-grow: 0;
  width: 32%;
  height: 140px;
  background: #FC5A5A;
  border-radius: 20px 0 0 20px;
  &:hover {
  background: #F55858;
  }
`

export const TaskContent = styled(Link)`
  flex-grow: 1;
  width: 40%;
  height: 140px;
  padding: 10px 30px 0px 30px;
  border: 2.6px #FAFAFA solid;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`

export const RewardContainer = styled.div`
  padding: 15px;
  border: 2.6px #F5F5F5 solid;
  border-radius: 20px;
  background: #FCFFFF;
  width: 20.8rem;
`
export const RewardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`
export const RewardRedeemBtn = styled(Button)`
  flex-grow: 0;
  width: 33%;
  height: 140px;
  background: #E1E5AE;
  border-radius: 0px 20px 20px 0px;
  &:hover {
  background: #DADEA9;
`

export const RewardContent = styled(Link)`
  flex-grow: 1;
  width: 40%;
  height: 140px;
  padding: 10px 30px 0px 30px;
  border: 2.6px #FAFAFA solid;
  border-radius: 20px 0px 0px 20px;
`
export const RewardItem = styled.div`
  flex-grow: 1;
  margin: 10px -7px 8px -09px;
  color: #171725;
  font-size: 22px;
  font-weight: 600;
`

export const RewardModal = styled(Modal)`
  background: #d2adb7;
  color: #fff;
  border-radius: 25px;

`
export const RewardModalChild = styled.form`
  background: #fff;
`

export const RewardFormStyle = styled.form`
  color: #000;
  
`

export const RewardLabel = styled.label`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`
export const InputSlot = styled.input`
  background: #fff !important;
  border-style: solid !important;
  border-width: 2px !important;
  padding-left: 5px !important;
  color: #000;
`
export const RewardButton = styled(Button)`
  background: #fff;
  color: #000;
`
export const RewardCoinImg = styled.img`
    height: 25px;
`
export const LoginContainer = styled.div`
  margin: auto;
  width: 800px;
  padding: 90px;
  border: 2.6px #F5F5F5 solid;
  border-radius: 20px;
  background: #FCFFFF;
`
export const HomeHeader = styled.header`
  text-align: center;
  display: block;
`
export const ImageText = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 25%;
  margin: 0 auto;
  `