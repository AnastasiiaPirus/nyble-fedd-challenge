import React, { useState } from "react";
import { PageBackgroundWrapper } from "./styles/Background";
import { PageWrapper } from "./styles/Wrappers";
import Spacer from "components/position/Spacer";
import Navbar from "components/widget/navbar/Navbar";
import LogOut from "components/widget/logout/Logout";

export type PageBackgroundPropsType = {
  children: any;
};

const PageBackground = ({ children }: PageBackgroundPropsType) => {
  return (
    <PageBackgroundWrapper>
      <PageWrapper>
        <Spacer height={100} />
        {children}
        <Spacer height={50} />
        <LogOut />
      </PageWrapper>
      <Navbar />
    </PageBackgroundWrapper>
  );
};

export default PageBackground;
