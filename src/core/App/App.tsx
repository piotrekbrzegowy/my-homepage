import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useAppSelector } from '../../features/homepage/hooks';
import { darkTheme, lightTheme } from './theme';

function App() {
  const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <div></div>
    </ThemeProvider>
  );
}

export default App;
