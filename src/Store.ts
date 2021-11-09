const NAME = "average_prod_lib";

export enum UI_THEME {
  DARK = "dark",
  LIGHT = "light",
}

export enum STORE_KEY {
  KEY_UI_THEME = "store.ui.theme",
}

interface StoredData {
  [STORE_KEY.KEY_UI_THEME]: UI_THEME;
}

const defaultValues = {
  [STORE_KEY.KEY_UI_THEME]: UI_THEME.LIGHT,
};

let storedData: StoredData = { ...defaultValues };

const storedStringData = window.localStorage.getItem(NAME);
if (storedStringData) {
  try {
    storedData = { ...defaultValues, ...JSON.parse(storedStringData) };
  } catch (err) {}
}

export const Store = {
  getValue(key: keyof StoredData) {
    return storedData[key];
  },

  setValue<Key extends keyof StoredData>(key: Key, value: StoredData[Key]) {
    storedData[key] = value;
    try {
      window.localStorage.setItem(NAME, JSON.stringify(storedData));
    } catch (err) {
      //Do not log
    }
  },

  getStorage() {
    return storedData;
  },
};
