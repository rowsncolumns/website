import {
  ColorMode,
  useIsomorphicLayoutEffect,
} from "@rowsncolumns/spreadsheet";
import { canUseDOM } from "@rowsncolumns/grid";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { usePrevious } from "./use-previous";

const MEDIA_QUERY = "(prefers-color-scheme: dark)";
const themeStorageKey = "rnc-colormode";

// Theme provider
const ColorModeContext = createContext<
  | [ColorMode | undefined, Dispatch<SetStateAction<ColorMode | undefined>>]
  | undefined
>(undefined);

export const useColorMode = () => {
  const contextValue = useContext(ColorModeContext);
  if (!contextValue) {
    throw "Wrap your component in ColorModeProvider";
  }
  return contextValue;
};
const getTheme = (key: string, fallback: ColorMode): ColorMode | undefined => {
  if (!canUseDOM) return undefined;
  let theme;
  try {
    theme = (localStorage.getItem(key) as ColorMode) || undefined;
  } catch (e) {
    // Unsupported
  }
  return theme ?? fallback;
};

const getSystemTheme = () => {
  const isDark = window.matchMedia(MEDIA_QUERY).matches;
  const systemTheme = isDark ? "dark" : "light";
  return systemTheme;
};

const initialColorMode = "light";

export const ColorModeProvider = ({ children }: { children: ReactNode }) => {
  const colorModeContextState = useState<ColorMode | undefined>(
    canUseDOM ? getSystemTheme() : undefined
  );
  const [colorMode, onChangeColorMode] = colorModeContextState;
  const previousColorMode = usePrevious(colorMode);
  const useSystemColorMode = true;

  // SSR Safety
  useIsomorphicLayoutEffect(() => {
    const savedTheme =
      localStorage.getItem(themeStorageKey) ?? getSystemTheme();
    if (savedTheme) {
      onChangeColorMode(savedTheme as ColorMode);
    }
  }, []);

  // Persist color mode
  useIsomorphicLayoutEffect(() => {
    // Persist theme
    // if (previousColorMode && colorMode && colorMode !== previousColorMode) {
    //   localStorage.setItem(themeStorageKey, colorMode);
    // }
    // Update classname
    document.documentElement.classList.toggle("dark", colorMode === "dark");
  }, [colorMode, previousColorMode]);

  // Use user's dark mode preferences
  useIsomorphicLayoutEffect(() => {
    if (useSystemColorMode) {
      const listener = (event: MediaQueryListEvent) => {
        console.log("called");
        onChangeColorMode(event.matches ? "dark" : "light");
      };

      if (canUseDOM) {
        window.matchMedia(MEDIA_QUERY).addEventListener("change", listener);
      }

      return () => {
        window.matchMedia(MEDIA_QUERY).removeEventListener("change", listener);
      };
    }
  }, [useSystemColorMode, onChangeColorMode]);

  return (
    <ColorModeContext.Provider value={colorModeContextState}>
      {children}
    </ColorModeContext.Provider>
  );
};
