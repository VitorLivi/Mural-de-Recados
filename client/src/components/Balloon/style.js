import styled from 'styled-components'

export const BalloonLayout = styled.div`

  background-color: ${({ isPrivate }) => isPrivate ? '#E4E4E4' : '#FFF'};

  -webkit-box-shadow: 2px 2px 3px 0px rgba(0,0,0,0.2);
  box-shadow: 2px 2px 3px 0px rgba(0,0,0,0.2);
  box-sizing: border-box;
  position: relative;
  border-radius: 15px;
  min-height: 100px;
  padding: 25px;
  width: 100%;
  height: 100%;

  p {
    margin: 0;
    font-family: RobotoRegular;
    font-size: 14px;
    color: #000;
  }
`

export const RightTail = styled.div`
  background-color: ${({ isPrivate }) => isPrivate ? '#E4E4E4' : '#FFF'};

  position: absolute;
  right: -12px;
  top: 50%;
  width: 15px;
  height: 15px;
  transform: rotate(315deg) translateY(-50%);
  -webkit-box-shadow: 2px 2px 3px 0px rgba(0,0,0,0.2);
  box-shadow: 2px 2px 3px 0px rgba(0,0,0,0.2);
`

export const LeftTail = styled.div`
  background-color: ${({ isPrivate }) => isPrivate ? '#E4E4E4' : '#FFF'};

  position: absolute;
  left: -14px;
  top: 50%;
  width: 15px;
  height: 15px;
  transform: rotate(45deg) translateY(-50%);
  border-left: solid 1px #E9E9E9;
  border-bottom: solid 1px #E9E9E9;
`

export const BalloonInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 20px;

  span {
    font-family: RobotoRegular;
    font-size: 12px;
    color: #9E9E9E;
  }

`

export const BallonInfoIcon = styled.img`
  width: 18px;
  height: 18px;
`
