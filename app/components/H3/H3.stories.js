import React from 'react';

import { storiesOf } from '@storybook/react';

import H3 from './index.js';

storiesOf('H3', module)
  .add('H3 with JSS', () => <H3>Header #3</H3>)
