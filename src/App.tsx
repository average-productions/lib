import React, { useCallback } from "react";
import cx from "classnames";
import { navOpenState, pageTypeState, themeState } from "./states/uiState";
import { useRecoilValue, useRecoilState } from "recoil";
import { VerticalNav } from "./modules/VerticalNav/VerticalNav";
import { Page } from "./modules/Pages/Page";
import "./App.scss";

export function App() {
  const theme = useRecoilValue(themeState);
  const [navOpen, setNavOpen] = useRecoilState(navOpenState);
  const pageType = useRecoilValue(pageTypeState);

  return (
    <div
      className={cx("app", theme, pageType, {
        "open-nav": navOpen,
      })}
    >
      <Page>fucker</Page>
    </div>
  );
}
