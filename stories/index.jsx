/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import infoAddon from '@kadira/react-storybook-addon-info';
import backgrounds from 'react-storybook-addon-backgrounds';
import { storiesOf, setAddon } from '@kadira/storybook';
import { withKnobs, color, object, number } from '@kadira/storybook-addon-knobs';

import { TrendChart } from '../src';

setAddon(infoAddon);

const stories = storiesOf('Charts', module);

stories
  .addDecorator(withKnobs)
  .addDecorator(backgrounds([
    { name: 'transparent', value: 'transparent', default: true },
    { name: 'dark', value: '#191b24' }
  ]));

// Generate chart data
const data = [];
for (let i = 0; i <= 10; i += 1) {
  const actual = Math.random() * 10;
  const expected = actual + (Math.random() * 10);
  data.push({ key: i, actual, expected });
}

stories
  .addWithInfo(
    'TrendChart',
    `Trend chart is a graphical representation of time series data (information
      in sequence over time) showing the trend line or curve that reveals a
      general pattern of change.`,
    () => {
      const margins = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      };

      const actualStyle = {
        strokeWidth: 2,
        strokeOpacity: 0.8,
        fillOpacity: 0.8
      };

      const expectedStyle = {
        strokeWidth: 2,
        strokeOpacity: 0.8,
        fillOpacity: 0.8
      };

      return (
        <TrendChart
          data={data}
          width={number('Width', 1000)}
          height={number('Height', 100)}
          margins={object('margins', margins)}
          actualStyle={object('actualStyle', actualStyle)}
          expectedStyle={object('expectedStyle', expectedStyle)}
          actualColor={color('actualColor', '#ee675a')}
          expectedColor={color('expectedColor', '#5e6066')}
        />
      );
    });
