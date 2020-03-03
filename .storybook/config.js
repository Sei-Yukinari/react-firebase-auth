import React from 'react';
import {configure, addDecorator} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {withKnobs} from '@storybook/addon-knobs';
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider,
} from '@material-ui/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Theme } from 'src/const';

import '../src/reset.css';

const req = require.context('../src/components', true, /.(story|stories).tsx$/);

function loadStories() {
  addDecorator(withInfo);
  addDecorator(withKnobs);
  addDecorator((story) => (
    <StylesProvider injectFirst>
      <MaterialThemeProvider theme={Theme}>
        <StyledThemeProvider theme={Theme}>
          {story()}
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </StylesProvider>
  ));
  req.keys().forEach(req);
}

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
document.body.append(modalRoot);

configure(loadStories, module);
