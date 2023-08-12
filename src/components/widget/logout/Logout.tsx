import React from "react";
import { LogoutButton } from "./styles/Logout";
import { MediumHeading } from "mixins/Font";

const Logout = () => {
  return (
    <LogoutButton>
      <MediumHeading>Logout</MediumHeading>
    </LogoutButton>
  );
};

export default Logout;
