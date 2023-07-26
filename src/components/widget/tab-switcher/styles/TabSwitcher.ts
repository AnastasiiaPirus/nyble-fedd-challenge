import styled from "styled-components"

export const TabSwitchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 100%;
  gap:17px;
  `

export const TabSwitchButton = styled.button<{
  bgColor?: string,
  borderColor?: string,
  fontColor?: string,
  currentTab?: boolean,
}>`
  background: ${props => props.bgColor || (({theme}) => theme.colours.white)};
  height:90px;
  width:90px;
  border: ${props => props.currentTab ? `3px solid ${(props.borderColor)}`||(({theme}) => theme.colours.black): 'none'};
  border-radius: 10px;
  &:hover{
    transform: scale(1.02);
    transition-duration: 0.2s;
  }
`
export const TabSwitchIconWrapper = styled.div`
  height:50px;
  width:50px;
  background-color: ${({theme}) => theme.colours.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`