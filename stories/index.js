/* eslint-disable import/no-extraneous-dependencies */

import backgrounds from 'react-storybook-addon-backgrounds';
import { storiesOf } from '@kadira/storybook';
import { withKnobs } from '@kadira/storybook-addon-knobs';
import TrendChart from './TrendChart';
import TrendAreaChart from './TrendAreaChart';

const stories = storiesOf('Charts', module);

stories
  .addDecorator(withKnobs)
  .addDecorator(backgrounds([
    { name: 'transparent', value: 'transparent', default: true },
    { name: 'dark', value: '#191b24' }
  ]));

stories.add('TrendChart', TrendChart);
stories.add('TrendAreaChart', TrendAreaChart);
