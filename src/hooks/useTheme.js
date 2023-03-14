import { useState, useEffect, useRef } from "react";

export const THEMES = [
  {
    name: "Default",
    value: "theme-default",
  },
  {
    name: "Swiss",
    value: "theme-swiss",
  },
  {
    name: "Neon",
    value: "theme-neon",
  },
];
export function useTheme() {
  const [theme, setTheme] = useState(THEMES[0].value);
  const currentTheme = useRef(theme);
  useEffect(() => {
    const root = document.getElementById("root");

    root?.classList?.remove(currentTheme.current);
    root?.classList?.add(theme);
    currentTheme.current = theme;
  }, [theme]);

  return [theme, setTheme];
}
