/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

import { configure } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';

setOptions({
  name: 'Urbica Components',
  url: 'https://github.com/urbica/components',
  downPanelInRight: true
});

configure(() => require('../stories'), module);
