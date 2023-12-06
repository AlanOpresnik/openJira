import { UIProvider } from "@/context/ui/UIProvider";
import "@/styles/globals.css";
import { darkTheme, ligthTheme } from "@/themes";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import type { AppProps } from "next/app";
import { EntriesProvider } from "../context/entries/EntriesProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
    <EntriesProvider>

        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
     
    </EntriesProvider>
    </UIProvider>
  );
}
