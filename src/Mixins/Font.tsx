import theme from "GlobalTheme";
import styled from "styled-components";
import { optional } from "utils/styledComponents";
import breakpoint from "styled-components-breakpoint";

export const StandardFont = `'Poppins', sans-serif`;
export const MediumFont = `'Poppins-Medium', sans-serif`;
export const SemiBoldFont = `'Poppins-SemiBold', sans-serif`;
export const BoldFont = `'Poppins-Bold', sans-serif`;
export const ExtraBoldFont = `'Poppins-ExtraBold', sans-serif`;
export const BlackFont = `'Poppins-Black', sans-serif`;

export const LargeHeading = styled.div<{
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
}>`
  /* font-family: ${BlackFont}; */
  font-family: ${StandardFont};
  font-weight: 800;
  font-size: 20px;
  line-height: 30px;
  font-stretch: normal;
  ${optional("marginBottom", "margin-bottom")}
  ${optional("textAlign", "text-align")}
  ${optional("alignSelf", "align-self")}
  ${optional("maxWidth", "max-width")}
  ${optional("color", "color", theme.colours.black)}

  -webkit-text-size-adjust:100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  ${breakpoint("tablet")`
      font-weight: 900;
      font-size: 24px;
      line-height: 26px;
  `}
`;

export const SmallHeading = styled.div<{
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
}>`
  /* font-family: ${BoldFont}; */
  font-family: ${StandardFont};
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  font-stretch: normal;
  ${optional("marginBottom", "margin-bottom")}
  ${optional("textAlign", "text-align")}
  ${optional("alignSelf", "align-self")}
  ${optional("maxWidth", "max-width")}
  ${optional("color", "color", theme.colours.black)}

  -webkit-text-size-adjust:100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
`;

export const LargeText = styled.div<{
  bold?: boolean;
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
}>`
  /* font-family: ${({ bold }) => (bold ? BoldFont : MediumFont)}; */
  font-family: ${StandardFont};
  font-weight: ${({ bold }) => (bold ? 700 : 500)};
  font-size: 24px;
  line-height: 26px;
  font-stretch: normal;

  ${optional("marginBottom", "margin-bottom")}
  ${optional("textAlign", "text-align")}
  ${optional("alignSelf", "align-self")}
  ${optional("maxWidth", "max-width")}
  ${optional("color", "color", theme.colours.black)}

  -webkit-text-size-adjust:100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
`;

// TODO: Define all required text fonts here

export const MediumHeading = styled.div<{
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
}>`
  font-family: ${StandardFont};
  font-weight: 800;
  font-size: 20px;
  line-height: normal;
  font-stretch: normal;
  ${optional("marginBottom", "margin-bottom")}
  ${optional("textAlign", "text-align")}
  ${optional("alignSelf", "align-self")}
  ${optional("maxWidth", "max-width")}
  ${optional("color", "color", theme.colours.black)}

  -webkit-text-size-adjust:100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
`;

export const MediumText = styled.div<{
  bold?: boolean;
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
}>`
  font-family: ${StandardFont};
  font-weight: 500;
  font-size: 20px;
  line-height: normal;
  font-stretch: normal;

  ${optional("marginBottom", "margin-bottom")}
  ${optional("textAlign", "text-align")}
  ${optional("alignSelf", "align-self")}
  ${optional("maxWidth", "max-width")}
  ${optional("color", "color", theme.colours.black)}

  -webkit-text-size-adjust:100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
`;

export const SmallText = styled.div<{
  bold?: boolean;
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
}>`
  font-family: ${StandardFont};
  font-weight: 500;
  font-size: 16px;
  line-height: normal;
  font-stretch: normal;

  ${optional("marginBottom", "margin-bottom")}
  ${optional("textAlign", "text-align")}
  ${optional("alignSelf", "align-self")}
  ${optional("maxWidth", "max-width")}
  ${optional("color", "color", theme.colours.black)}

  -webkit-text-size-adjust:100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
`;

export const BalanceText = styled.div<{
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
}>`
  font-family: ${StandardFont};
  font-weight: 900;
  font-size: 45px;
  line-height: 50px;
  letter-spacing: -0.9px;
  font-stretch: normal;
  ${optional("marginBottom", "margin-bottom")}
  ${optional("textAlign", "text-align")}
  ${optional("alignSelf", "align-self")}
  ${optional("maxWidth", "max-width")}
  ${optional("color", "color", theme.colours.black)}

  -webkit-text-size-adjust:100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
`;
