import React from 'react'
import { createTheme, PaletteMode, ThemeProvider } from '@mui/material'
import RobotoRegularWoff2 from '../../assets/fonts/Roboto-Regular.woff2'
import RobotoBoldWoff2 from '../../assets/fonts/Roboto-Bold.woff2'
import RobotoLightWoff2 from '../../assets/fonts/Roboto-Light.woff2'
import MontserratBoldWoff2 from '../../assets/fonts/Montserrat-Bold.woff2'
import MontserratExtraBoldWoff2 from '../../assets/fonts/Montserrat-ExtraBold.woff2'

interface IColorModeContext {
  toggleColorMode: () => void,
  mode: 'dark' | 'light'
}

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isDarkTheme ? 'dark' : 'light';

export const ColorModeContext = React.createContext<IColorModeContext>({
  toggleColorMode: () => { },
  mode: defaultTheme
})

export default function ColorModeContextProvider({ children }: React.PropsWithChildren) {
  const [mode, setMode] = React.useState<PaletteMode>(localStorage.getItem('hire-app-theme') as PaletteMode || defaultTheme);

  React.useLayoutEffect(() => {
    localStorage.setItem('hire-app-theme', mode);
  }, [mode])

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,

          ...(mode === 'light'
            ? {
              primary: {
                main: '#fff',
              },
              backgroundVacancyParagraph: {
                one: '#FDFDFD'
              },
              background1: {
                one: ' #EFEFEF'
              },
              everBlackText: {
                one: '#292929'
              },
              everDisabledTextColor: {
                one: '#60728A'
              },
              text: {
                primary: '#333',
                disabled: '#60728A',
              },
              textColor1: {
                one: '#003791',
                two: '#A2AFBF'
              },
              icons: {
                primary: '#003791'
              }
            }
            // black
            : {
              primary: {
                main: '#333'
              },

              backgroundVacancyParagraph: {
                one: '#333'
              },

              background1: {
                one: ' #cecece'
              },

              everBlackText: {
                one: '#292929'
              },
              everDisabledTextColor: {
                one: '#60728A'
              },
              textColor1: {
                one: '#003791',
                two: '#333'
              },
              text: {
                primary: '#fff',
                disabled: '#fff'
              },
              icons: {
                primary: '#fff'
              }
            }),
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: `
              @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-display: swap;
                font-weight: 400;
                src: local('Roboto'), local('Roboto-Regular'), url(${RobotoRegularWoff2}) format('woff2');
              }

              @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-display: swap;
                font-weight: 700;
                src: local('Roboto'), local('Roboto-Bold'), url(${RobotoBoldWoff2}) format('woff2');
              }

              @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-display: swap;
                font-weight: 300;
                src: local('Roboto'), local('Roboto-Light'), url(${RobotoLightWoff2}) format('woff2');
              }

              @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-display: swap;
                font-weight: 700;
                src: local('Montserrat'), local('Montserrat-Bold'), url(${MontserratBoldWoff2}) format('woff2');
              }

              @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-display: swap;
                font-weight: 800;
                src: local('Montserrat'), local('Montserrat-ExtraBold'), url(${MontserratExtraBoldWoff2}) format('woff2');
              }

            `,
          },
        },

      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export const useColorMode = () => React.useContext(ColorModeContext)
