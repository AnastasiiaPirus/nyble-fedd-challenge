import { useApolloClient } from "@apollo/client";
import { useToast } from "components/widget/toast/Toast";
import sendWoofMutation from "graphql/generated/mutations/woofMutation";
import { LargeHeading, MediumHeading } from "mixins/Font";
import React from "react";
import { WoofWrapper, WoofButton, WoofButtonWrapper } from "../styles/HomePage";
import { useTheme } from "styled-components";

export type WoofTabProps = {};

export const WoofTab = ({}: WoofTabProps) => {
  const theme = useTheme();
  const apolloClient = useApolloClient();
  const [openSuccessToast, openErrorToast] = useToast();
  const onWoof = () => {
    sendWoofMutation(apolloClient, {
      timestamp: new Date().toISOString(),
    })
      .then((res) => {
        openSuccessToast("Woofed!");
      })
      .catch((err) => {
        openErrorToast("Error during woof");
      });
  };

  return (
    <>
      <WoofWrapper>
        <LargeHeading textAlign="center">Woof</LargeHeading>
        <WoofButtonWrapper>
          <WoofButton onClick={onWoof}>
            <MediumHeading color={theme.colours.white}>
              Click here to woof
            </MediumHeading>
          </WoofButton>
        </WoofButtonWrapper>
      </WoofWrapper>
    </>
  );
};
