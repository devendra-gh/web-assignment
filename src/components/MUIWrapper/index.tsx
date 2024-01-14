import { createContext, useMemo, useState, useEffect } from "react";
import { createTheme, ThemeProvider, PaletteMode } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

export const MUIWrapperContext = createContext({
  locale: "en",
  setLocale: (locale: any) => { },
  mTheme: { name: "" },
  updateTheme: (theme: any) => { },
  toggleColorMode: () => { }
});

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const emptyCache = createCache({
  key: "meaningless-key",
});

const MUIWrapper = ({ children }: { children: React.ReactNode }) => {
  const [mTheme, setMTheme] = useState<any>();
  const [mode, setMode] = useState<PaletteMode>("light");
  const [locale, setLocale] = useState<any>("en");

  const muiWrapperUtils = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    },
    updateTheme: (data: any) => {
      setMTheme(data);
    },
  }), []);

  useEffect(() => {
    document.dir = locale.direction;
  }, [locale.direction]);

  const theme = useMemo(() =>
    createTheme(
      {
        palette: {
          mode: mode,
          ...mTheme?.palette
        },
        direction: locale.direction,
      },
      locale.muiCore,
      locale.muiDatePicker
    ), [mode, locale, mTheme]);

  return (
    <CacheProvider value={locale.direction === "rtl" ? cacheRtl : emptyCache}>
      <MUIWrapperContext.Provider
        value={{
          locale,
          setLocale,
          mTheme,
          updateTheme: muiWrapperUtils.updateTheme,
          toggleColorMode: muiWrapperUtils.toggleColorMode
        }}
      >
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </MUIWrapperContext.Provider>
    </CacheProvider>
  );
}

export default MUIWrapper;
