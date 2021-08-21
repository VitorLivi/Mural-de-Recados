import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const InputWrapper = styled.div`
  position: relative;
`

export const DefaultInput = styled.input`
  height: 40px;
  padding: 5px;
  border-radius: 6px;
  padding-left: 15px;
  padding-right: 30px;
  border: solid 0.5px #CBCBCB;
  font-family: Roboto Regular;
  font-size: 14px;
  color: #000;
`

export const InputIcon = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    transform: scale(1.05) translateY(-50%);
  }
`

export const InputLabel = styled.span`
  font-family: Roboto Regular;
  font-size: 14px;
  color: #000;
`
