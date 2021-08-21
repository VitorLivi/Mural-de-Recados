import styled from 'styled-components'

export const MessageItemLayout = styled.div`
  display: flex;
  gap: 30px;

  flex-direction: ${({ isPrivate }) => isPrivate ? 'row-reverse' : 'row'};
`
