import React from "react";
import {
  Navbar,
  NavTitle,
  NavWaffle,
  NavSearch,
  StickyNavBar,
  SectionWrapper,
  CommandBar,
  LeftNavigation,
  NavigationItem,
  NavigationHeader,
  NavButton,
  PageContainer,
  ContentContainer,
  HamburgerUi,
  HamburgerListItem
} from "one-ui-fabric/dist";

const DefaultCommandBar = props => {
  console.log(props);
  return (
    <div className="navbar-auxiliary-row">
      <NavSearch
        searchValue={props.searchValue}
        setSearchValue={props.setSearchValue}
      />
      <CommandBar items={props.items} />
    </div>
  );
};

export default DefaultCommandBar;
