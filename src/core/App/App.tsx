import { ThemeProvider } from 'styled-components';
import { useAppSelector } from '../../features/homepage/hooks';
import { PersonalHomepage } from '../../features/homepage/PersonalHomepage';
import { GlobalStyle } from './globalStyle';
import { darkTheme, lightTheme } from './theme';

function App() {
  const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
