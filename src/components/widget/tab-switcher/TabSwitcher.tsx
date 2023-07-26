import React from "react";
import {
  TabSwitchWrapper,
  TabSwitchIconWrapper,
  TabSwitchButton,
} from "./styles/TabSwitcher";
import { SmallHeading } from "mixins/Font";
import { useTheme } from "styled-components";

export type OptionsPropsType = {
  bgColor: string;
  borderColor: string;
  label: string;
  tab: string;
  fontColorDefault: string;
  fontColorActive: string;
  icon: React.ReactElement;
}[];
export type StatePropsType = {
  currTab: string;
};

const TabSwitcher = ({
  switchTab,
  state,
  options,
}: {
  switchTab: (tab: string) => void;
  state: StatePropsType;
  options: OptionsPropsType;
}) => {
  const theme = useTheme();

  return (
    <>
      <TabSwitchWrapper>
        {options.map((item) => (
          <TabSwitchButton
            key={item.tab}
            bgColor={item.bgColor}
            borderColor={item.borderColor}
            onClick={() => switchTab(item.tab)}
            currentTab={state.currTab === item.tab}
          >
            <TabSwitchIconWrapper>{item.icon}</TabSwitchIconWrapper>
            <SmallHeading
              color={
                state.currTab === item.tab
                  ? item.fontColorActive
                  : item.fontColorDefault
              }
            >
              {item.label}
            </SmallHeading>
          </TabSwitchButton>
        ))}
      </TabSwitchWrapper>
    </>
  );
};

export default TabSwitcher;
