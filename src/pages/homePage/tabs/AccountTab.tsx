import useGetAccountQuery from "graphql/generated/queries/getAccountQuery";
import {
  LargeHeading,
  BalanceText,
  MediumText,
  SmallText,
  SmallHeading,
} from "mixins/Font";
import React from "react";
import { useTheme } from "styled-components";
import doggy_dollar from "images/doggy_dollar.png";
import { HomePageImage, AccountStatus } from "../styles/HomePage";

export type AccountTabProps = {};

export const AccountTab = ({}: AccountTabProps) => {
  const theme = useTheme();
  const { data, loading, refetch } = useGetAccountQuery();

  const account = data && data.getAccount.success ? data.getAccount.data : null;
  if (loading) {
    return <></>;
  }
  const balance = (account.balance / 100).toLocaleString();
  return (
    <>
      <LargeHeading textAlign="center">
        Your current account balance is
      </LargeHeading>
      <HomePageImage src={doggy_dollar} alt="doggy dollar" />
      <BalanceText
        textAlign="center"
        color={theme.colours.primary.dark}
      >{`$D${balance}`}</BalanceText>
      <MediumText textAlign="center" marginBottom="24px">
        {account.currency}
      </MediumText>
      <SmallText textAlign="center">Account status</SmallText>
      <AccountStatus>
        <SmallHeading textAlign="center" color={theme.colours.primary.dark}>
          {account.status}
        </SmallHeading>
      </AccountStatus>
    </>
  );
};
