/* eslint-disable import/no-extraneous-dependencies */

import backgrounds from '@storybook/addon-backgrounds';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import AreaChart from './AreaChart';
import LineChart from './LineChart';
import TrendChart from './TrendChart';
import TrendAreaChart from './TrendAreaChart';

const stories = storiesOf('Charts', module);

stories
  .addDecorator(withKnobs)
  .addDecorator(
    backgrounds([
      { name: 'transparent', value: 'transparent', default: true },
      { name: 'dark', value: '#191b24' }
    ])
  );

stories.add('LineChart', LineChart);
stories.add('AreaChart', AreaChart);
stories.add('TrendChart', TrendChart);
stories.add('TrendAreaChart', TrendAreaChart);
