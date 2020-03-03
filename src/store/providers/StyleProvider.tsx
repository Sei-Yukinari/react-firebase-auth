import React from 'react';
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider,
} from '@material-ui/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Theme } from 'src/const';

const StyleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <StylesProvider injectFirst>
      <MaterialThemeProvider theme={Theme}>
        <StyledThemeProvider theme={Theme}>{children}</StyledThemeProvider>
      </MaterialThemeProvider>
    </StylesProvider>
  );
};

export default StyleProvider;
