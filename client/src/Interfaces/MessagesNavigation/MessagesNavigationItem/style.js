
import styled from 'styled-components'

export const MessagesNavigationItemLayout = styled.nav`
  flex: 1;
  height: 45px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-bottom: ${props => props.disabled ? 'solid 1px #5D68FF' : 'solid 5px #0011FF'};
  position: relative;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;

  nav-item {
    position: absolute;
    font-family: RobotoBold;
    font-size: 14px;
    color: ${props => props.disabled ? '#5D68FF' : '#0011FF'};
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

`
