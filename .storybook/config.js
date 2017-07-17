/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

import { setOptions } from '@storybook/addon-options';
import { configure, setAddon } from '@storybook/react';

setOptions({
  name: 'Urbica Components',
  url: 'https://github.com/urbica/components',
  downPanelInRight: true
});

configure(() => require('../stories'), module);
