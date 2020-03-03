import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Link from './index';

storiesOf('Atoms|Link', module).add('index', () => (
  <Link href="https://www.google.com/">リンク</Link>
));
