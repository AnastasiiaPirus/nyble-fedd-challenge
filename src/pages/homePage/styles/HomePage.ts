
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { optional } from 'utils/styledComponents';

export const HomePageWrapper = styled.div`
  flex: 1;
  flex-direction: column;
  height: 100%;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
`;

export const HomePageTabWrapper = styled.div<{
  someOption?: string
  // You can add options here
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.colours.white};
  border-radius: 10px;
  min-height: 60%;

  ${breakpoint('mobile')`
    width: 100%;
    max-width: 350px;
    padding: 24px 24px;
  `}

  ${breakpoint('tablet')`
    width: 100%;
    max-width: 900px;
    padding: 48px 24px;
  `}
`

export const HomePageImage = styled.img`
  height: 100px;
  width: 100px;
`

export const AccountStatus = styled.div`
  height: 35px;
  min-height:35px;
  width: 200px;
  background-color: ${({theme}) => theme.colours.primary.light};
  border-radius: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const WoofWrapper = styled.div`
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const WoofButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const WoofButton = styled.button`
  height: 65px;
  min-height:65px;
  width: 300px;
  background-color: ${({theme}) => theme.colours.neutral.dark};
  border: none;
  border-radius: 65px;
  margin: 0 auto;
  ${breakpoint('tablet')`
    width: 350px;
  `}
  transition-duration: 0.2s;
  &:hover{
    transform: scale(1.05);
    transition-duration: 0.2s;
  }
`