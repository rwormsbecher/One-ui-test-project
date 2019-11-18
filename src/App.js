import React, { useState } from "react";
import { Panel, PanelType } from "office-ui-fabric-react/lib/Panel";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Icon } from "office-ui-fabric-react/lib/Icon";
import { NavLink, Switch, Route } from "react-router-dom";

import userImage from "./assets/images/anonymous-user-gravatar.png";
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
import allTeams from "./components/allTeams/allTeams";
import Teams from "./components/teams/Teams";
import Settings from "./components/settings/Settings";
import DefaultCommandBar from "./components/commandbar/Commandbar";
import SettingsCommandBar from "./components/searchCommandBar/searchCommandBar";

function App() {
  const [panelIsOpen, setPanelIsOpen] = useState(false);
  const [notificationsIsOpen, setNotificationsIsOpen] = useState(false);
  const [accountIsOpen, setAccountIsOpen] = useState(false);
  const [hamburgerMenuIsOpen, hamburgerMenuToggle] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  let hamburgerMenuUi = "";
  if (hamburgerMenuIsOpen) {
    hamburgerMenuUi = (
      <HamburgerUi>
        <NavLink to="/teams">
          <HamburgerListItem
            title="Mijn teams"
            icon="Group"
            hamburgerMenuToggle={hamburgerMenuToggle}
          />
        </NavLink>
        <NavLink to="/allteams">
          <HamburgerListItem
            title="Alle teams"
            icon="ChromeClose"
            hamburgerMenuToggle={hamburgerMenuToggle}
          />
        </NavLink>
      </HamburgerUi>
    );
  }

  const commandBarList = [
    {
      key: "openPanel",
      name: "Open panel",
      cacheKey: "myCacheKey", // changing this key will invalidate this items cache
      iconProps: {
        iconName: "SidePanelMirrored"
      },
      ariaLabel: "Open panel",
      onClick: () => setPanelIsOpen(true)
    }
  ];

  return (
    <div className="App">
      <StickyNavBar>
        <Navbar>
          {/* Renders the left portion of the navbar */}
          <SectionWrapper>
            <NavWaffle
              hamburgerMenuIsOpen={hamburgerMenuIsOpen}
              hamburgerMenuToggle={hamburgerMenuToggle}
            />
            <NavTitle title="One Teams" />
          </SectionWrapper>

          {/* Renders the right section of the navbar */}
          <SectionWrapper>
            <NavButton
              faIcon={faBell}
              setNotificationsIsOpenHandler={setNotificationsIsOpen}
              notificationsIsOpen={notificationsIsOpen}
              type="notifications"
            />
            <NavButton
              type="settings"
              link={
                <NavLink to="/settings">
                  <div className="navbar__navbutton">
                    <Icon iconName="settings" />
                  </div>
                </NavLink>
              }
            />

            <NavButton
              photoUrl={userImage}
              type="account"
              setAccountIsOpenHandler={setAccountIsOpen}
            />
          </SectionWrapper>
        </Navbar>
        {hamburgerMenuUi}

        <Switch>
          <Route path="/settings" component={SettingsCommandBar} />
          <Route
            path="/"
            render={props => (
              <DefaultCommandBar
                {...props}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                items={commandBarList}
              />
            )}
          />
        </Switch>
      </StickyNavBar>

      <PageContainer>
        <LeftNavigation>
          <NavigationHeader headerText="Teams" />
          <NavLink to="/Teams" activeClassName="navigation-item--active">
            <NavigationItem
              iconName="group"
              title="My teams"
              onClick={() => console.log("My teams clicked!")}
            />
          </NavLink>
          <NavLink to="/AllTeams" activeClassName="navigation-item--active">
            <NavigationItem iconName="search" title="All teams" />
          </NavLink>
        </LeftNavigation>

        <ContentContainer>
          <Switch>
            <Route exact path="/allTeams" component={allTeams} />
            <Route exact path="/teams" component={Teams} />
            <Route exact path="/settings" component={Settings} />
          </Switch>
        </ContentContainer>
      </PageContainer>

      <Panel
        className="account-panel"
        isOpen={panelIsOpen}
        type={PanelType.smallFixedFar}
        onDismiss={() => setPanelIsOpen(false)}
        isLightDismiss
        onLightDismissClick={() => setPanelIsOpen(false)}
        closeButtonAriaLabel="Close"
      >
        <div>Panel</div>
      </Panel>

      <Panel
        className="account-panel"
        isOpen={notificationsIsOpen}
        type={PanelType.smallFixedFar}
        onDismiss={() => setNotificationsIsOpen(false)}
        isLightDismiss
        onLightDismissClick={() => setNotificationsIsOpen(false)}
        closeButtonAriaLabel="Close"
      >
        <div>Notifications Panel</div>
      </Panel>

      <Panel
        className="account-panel"
        isOpen={accountIsOpen}
        type={PanelType.smallFixedFar}
        onDismiss={() => setAccountIsOpen(false)}
        isLightDismiss
        onLightDismissClick={() => setAccountIsOpen(false)}
        closeButtonAriaLabel="Close"
      >
        <div>Account Panel</div>
      </Panel>
    </div>
  );
}

export default App;
