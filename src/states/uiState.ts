import { atom } from "recoil";
import { Store, STORE_KEY, UI_THEME } from "../Store";

export enum PAGE_TYPE {
  STRIPPED = "stripped",
  DEFAULT = "default",
}

export const themeState = atom<UI_THEME>({
  key: "ui_theme",
  default: Store.getValue(STORE_KEY.KEY_UI_THEME),
});

export const pageTypeState = atom<PAGE_TYPE>({
  key: "ui_page_type",
  default: PAGE_TYPE.DEFAULT,
});

export const navOpenState = atom<boolean>({
  key: "ui_menu_open",
  default: false,
});
