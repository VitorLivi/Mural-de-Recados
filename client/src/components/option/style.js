import styled from 'styled-components'

export const OptionCheckbox = styled.input`
  cursor: pointer;
`

export const OptionLabel = styled.label`
  margin-left: 5px;
  font-family: RobotoBold;
  font-size: 14px;
  color: ${props => props.disabled ? '#5D68FF' : '#0011FF'};
`

export const OptionLayout = styled.div`
  display: flex;
  align-items: center;
`
