import React, { useCallback } from "react";
import { navOpenState, themeState } from "../../states/uiState";
import { useSetRecoilState } from "recoil";
import { UI_THEME } from "../../Store";
import { Button } from "../../components/Button/Button";
import "./VerticalNav.scss";

export function VerticalNav() {
  const setTheme = useSetRecoilState(themeState);
  const setNavOpen = useSetRecoilState(navOpenState);

  const toggleTheme = useCallback(
    () =>
      setTheme((prevTheme) =>
        prevTheme === UI_THEME.DARK ? UI_THEME.LIGHT : UI_THEME.DARK
      ),
    []
  );

  return (
    <nav id="vertical-nav">
      <Button block onClick={toggleTheme}>
        Toggle theme
      </Button>
      <Button block ghost onClick={setNavOpen}>
        Close nav
      </Button>
    </nav>
  );
}
