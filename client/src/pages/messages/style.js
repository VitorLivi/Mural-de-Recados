import styled from 'styled-components'

export const MessageContainer = styled.div`
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  display: flex;
  width: 100%;
  height: 100%;
  gap: 25px;
  z-index: 1;
`

export const Options = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 35px;
`

export const TextAreaWrapper = styled.div`
  height: 45px;
  margin-top: 35px;
  position: relative;
  width: calc(100% - 50px);
`

export const MessagesSectionTitle = styled.span`
  font-family: RobotoLight;
  font-size: 32px;
  color: #000;
`

export const MessagesSection = styled.section`
  width: 800px;
`

export const MessagesNavigationWrapper = styled.div`
  margin-top: 25px;
`

export const ButtonWrapper = styled.div`
  width: 100px;
  height: 35px;
  margin-top: 65px;
  float: right;
`

export const MessageWrapper = styled.div`
  width: 100%;
  height: max-content;
`
