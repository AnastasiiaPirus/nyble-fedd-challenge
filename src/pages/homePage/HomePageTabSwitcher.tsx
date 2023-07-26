import React from "react";
import { useTheme } from "styled-components";
import DollarSign from "images/DollarSign";
import Gift from "images/Gift";
import Cat from "images/Cat";
import { TABS, HomePageStateType } from "./homePageState";
import TabSwitcher, {
  OptionsPropsType,
} from "../../components/widget/tab-switcher/TabSwitcher";

const HomePageTabSwitcher = ({
  switchTab,
  state,
}: {
  switchTab: (tab: keyof typeof TABS) => void;
  state: HomePageStateType;
}) => {
  const theme = useTheme();
  let TAB_OPTIONS: OptionsPropsType;
  TAB_OPTIONS = [
    {
      bgColor: theme.colours.primary.main,
      borderColor: theme.colours.neutral.dark,
      label: "Account",
      tab: TABS.ACCOUNT_TAB,
      fontColorDefault: theme.colours.white,
      fontColorActive: theme.colours.black,
      icon: (
        <DollarSign
          stroke={
            state.currTab === TABS.ACCOUNT_TAB
              ? theme.colours.black
              : theme.colours.primary.main
          }
        />
      ),
    },
    {
      bgColor: theme.colours.secondary.main,
      borderColor: theme.colours.black,
      label: "Rewards",
      tab: TABS.REWARDS_TAB,
      fontColorDefault: theme.colours.white,
      fontColorActive: theme.colours.black,
      icon: (
        <Gift
          stroke={
            state.currTab === TABS.REWARDS_TAB
              ? theme.colours.neutral.dark
              : theme.colours.secondary.main
          }
        />
      ),
    },
    {
      bgColor: theme.colours.neutral.dark,
      borderColor: theme.colours.secondary.light,
      label: "Woof",
      tab: TABS.WOOF_TAB,
      fontColorDefault: theme.colours.white,
      fontColorActive: theme.colours.white,
      icon: <Cat stroke={theme.colours.neutral.dark} />,
    },
  ];

  return (
    <TabSwitcher switchTab={switchTab} state={state} options={TAB_OPTIONS} />
  );
};

export default HomePageTabSwitcher;
