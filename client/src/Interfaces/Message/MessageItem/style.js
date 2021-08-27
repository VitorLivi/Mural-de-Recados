import styled from 'styled-components'
import { TailOptions } from '../../../Components/Balloon'

export const MessageItemLayout = styled.div`
  display: flex;
  gap: 30px;

  flex-direction: ${({ tail }) => tail === TailOptions.TAIL_RIGHT ? 'row-reverse' : 'row'};
`
