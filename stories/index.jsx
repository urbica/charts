/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import infoAddon from '@kadira/react-storybook-addon-info';
import backgrounds from 'react-storybook-addon-backgrounds';
import { storiesOf, setAddon } from '@kadira/storybook';
import { withKnobs, color, object, number } from '@kadira/storybook-addon-knobs';
import { TrendChart, TrendAreaChart } from '../src';

setAddon(infoAddon);

const stories = storiesOf('Charts', module);

stories
  .addDecorator(withKnobs)
  .addDecorator(backgrounds([
    { name: 'transparent', value: 'transparent', default: true },
    { name: 'dark', value: '#191b24' }
  ]));

const data = [
  { date: new Date(2007, 3, 24), value: 93.24 },
  { date: new Date(2007, 3, 25), value: 95.35 },
  { date: new Date(2007, 3, 26), value: 98.84 },
  { date: new Date(2007, 3, 27), value: 99.92 },
  { date: new Date(2007, 3, 30), value: 99.80 },
  { date: new Date(2007, 4, 1), value: 99.47 }
];

const trendData = data.map(row => ({
  ...row,
  actual: Math.random() * 10,
  expected: Math.random() * 20
}));

stories.addWithInfo(
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

    const opacityOptions = { range: true, min: 0, max: 1, step: 0.1 };

    const actualStyle = {
      stroke: color('Actual color', '#ee675a'),
      strokeWidth: number('Actual stroke width', 2),
      strokeOpacity: number('Actual stroke opacity', 0.8, opacityOptions)
    };

    const expectedStyle = {
      stroke: color('Expected color', '#5e6066'),
      strokeWidth: number('Expected stroke width', 2),
      strokeOpacity: number('Expected stroke opacity', 0.8, opacityOptions)
    };

    return (
      <TrendChart
        data={trendData}
        width={number('Width', 1000)}
        height={number('Height', 100)}
        margins={object('margins', margins)}
        actualStyle={actualStyle}
        expectedStyle={expectedStyle}
      />
    );
  });

stories.addWithInfo(
  'TrendAreaChart',
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

    const opacityOptions = { range: true, min: 0, max: 1, step: 0.1 };

    const actualStyle = {
      fill: color('Actual fill color', '#ee675a'),
      fillOpacity: number('Actual fill opacity', 0.8, opacityOptions),
      stroke: color('Actual stroke color', '#ee675a'),
      strokeWidth: number('Actual stroke width', 2),
      strokeOpacity: number('Actual stroke opacity', 0.8, opacityOptions)
    };

    const expectedStyle = {
      fill: color('Expected fill color', '#5e6066'),
      fillOpacity: number('Expected fill opacity', 0.8, opacityOptions),
      stroke: color('Expected stroke color', '#5e6066'),
      strokeWidth: number('Expected stroke width', 2),
      strokeOpacity: number('Expected stroke opacity', 0.8, opacityOptions)
    };

    return (
      <TrendAreaChart
        data={trendData}
        width={number('Width', 1000)}
        height={number('Height', 100)}
        margins={object('margins', margins)}
        actualStyle={actualStyle}
        expectedStyle={expectedStyle}
      />
    );
  });
