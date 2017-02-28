/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { color, object, number, select } from '@kadira/storybook-addon-knobs';
import { TrendAreaChart } from '../src';

const data = [];
for (let i = 1; i <= 10; i += 1) {
  const date = new Date(3600 * 24 * 1000 * i);
  const actual = Math.random() * i;
  const expected = actual + Math.random();
  data.push({ date, expected, actual });
}

for (let i = 11; i <= 20; i += 1) {
  const date = new Date(3600 * 24 * 1000 * i);
  const expected = Math.random() * i;
  data.push({ date, expected });
}

export default () => {
  const margins = {
    top: 0,
    right: 0,
    bottom: 20,
    left: 20
  };

  const opacityOptions = { range: true, min: 0, max: 1, step: 0.1 };
  const linecapOptions = { butt: 'butt', round: 'round', square: 'square' };
  const linejoinOptions = { miter: 'miter', round: 'round', bevel: 'bevel' };

  const actualStyle = {
    fill: color('Actual fill color', '#ee675a'),
    fillOpacity: number('Actual fill opacity', 0.6, opacityOptions),
    stroke: color('Actual color', '#ee675a'),
    strokeWidth: number('Actual stroke width', 2),
    strokeOpacity: number('Actual stroke opacity', 1, opacityOptions),
    strokeLinecap: select('Actual line cap', linecapOptions, 'round'),
    strokeLinejoin: select('Actual line join', linejoinOptions, 'round')
  };

  const expectedStyle = {
    fill: color('Expected fill color', '#5e6066'),
    fillOpacity: number('Expected fill opacity', 0.6, opacityOptions),
    stroke: color('Expected color', '#5e6066'),
    strokeWidth: number('Expected stroke width', 2),
    strokeOpacity: number('Expected stroke opacity', 1, opacityOptions),
    strokeLinecap: select('Expected line cap', linecapOptions, 'round'),
    strokeLinejoin: select('Expected line join', linejoinOptions, 'round')
  };

  const axisStyle = {
    stroke: color('Axis stroke color', '#fff')
  };

  const textStyle = {
    fill: color('Axis text fill color', '#fff')
  };

  return (
    <TrendAreaChart
      data={data}
      width={number('Width', 640)}
      height={number('Height', 240)}
      margins={object('margins', margins)}
      actualStyle={actualStyle}
      expectedStyle={expectedStyle}
      axisStyle={axisStyle}
      textStyle={textStyle}
    />
  );
};
