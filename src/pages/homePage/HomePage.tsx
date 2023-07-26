import React from "react";
import { HomePageTabWrapper } from "./styles/HomePage";
import { LargeText } from "mixins/Font";
import Spacer from "components/position/Spacer";
import PageBackground from "pagesShared/Background";
import { useHomePageState, TABS } from "./homePageState";
import { AccountTab } from "./tabs/AccountTab";
import { RewardsTab } from "./tabs/RewardsTab";
import { WoofTab } from "./tabs/WoofTab";
import HomePageTabSwitcher from "./HomePageTabSwitcher";

const HomePage = () => {
  const [state, dispatch] = useHomePageState();

  const switchTab = (tab: keyof typeof TABS) => {
    dispatch({
      type: "SWITCH_TAB",
      payload: {
        newTab: tab,
      },
    });
  };

  const tabs = {
    [TABS.ACCOUNT_TAB]: <AccountTab />,
    [TABS.REWARDS_TAB]: <RewardsTab />,
    [TABS.WOOF_TAB]: <WoofTab />,
  };

  return (
    <PageBackground>
      <Spacer height={24} />
      <LargeText
        bold
        alignSelf="flex-start"
        textAlign="left"
        marginBottom="12px"
      >
        Welcome back, Billy
      </LargeText>
      <HomePageTabSwitcher switchTab={switchTab} state={state} />
      <Spacer height={24} />
      <HomePageTabWrapper>{tabs[state.currTab]}</HomePageTabWrapper>
    </PageBackground>
  );
};

export default HomePage;
