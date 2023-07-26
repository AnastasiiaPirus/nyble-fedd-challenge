import styled from 'styled-components';

export const LogoutButton = styled.button<{
  activeClassName?: string
}>`
  height: 65px;
  margin-bottom:20px;
  min-height:65px;
  width:350px;
  max-width:100%;
  border: 3px solid ${({ theme }) => theme.colours.black};
  border-radius: 65px;
  background-color:${({ theme }) => theme.colours.neutral.light};
  cursor: pointer;
  transition-duration: 0.2s;
  &:hover{
    transform: scale(1.05);
    transition-duration: 0.2s;
  }
`