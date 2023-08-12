import useGetRewardsQuery from "graphql/generated/queries/getRewardsQuery";
import { LargeHeading, BalanceText, SmallText } from "mixins/Font";
import { useTheme } from "styled-components";
import bone from "images/bone.png";
import { HomePageImage, AccountStatus } from "../styles/HomePage";
import React from "react";

export type RewardsTabProps = {};

export const RewardsTab = ({}: RewardsTabProps) => {
  const theme = useTheme();
  const { data, loading } = useGetRewardsQuery();
  const account = data && data.getRewards.success ? data.getRewards.data : null;
  if (loading) {
    return <></>;
  }
  return (
    <>
      <LargeHeading textAlign="center">Your rewards</LargeHeading>
      <HomePageImage src={bone} alt="doggy dollar" />
      <BalanceText
        textAlign="center"
        color={theme.colours.secondary.dark}
      >{`${account.bones} Bones`}</BalanceText>
      <SmallText textAlign="center">
        You'll earn a bone every time you achieve a “good boy” status.
      </SmallText>
    </>
  );
};
