/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { scaleLinear, scaleTime } from 'd3-scale';
import { color, number, select } from '@storybook/addon-knobs';
import { AreaChart } from '../src';

const data = [];
for (let i = 1; i <= 100; i += 1) {
  const x = new Date(3600 * 24 * 1000 * i);
  const y = Math.random() * i;
  data.push({ x, y });
}

export default () => {
  const opacityOptions = { range: true, min: 0, max: 1, step: 0.1 };
  const linecapOptions = { butt: 'butt', round: 'round', square: 'square' };
  const linejoinOptions = { miter: 'miter', round: 'round', bevel: 'bevel' };

  const areaStyle = {
    fill: color('Area fill color', '#000'),
    fillOpacity: number('Area fill opacity', 1, opacityOptions),
    stroke: color('Area color', '#000'),
    strokeWidth: number('Area stroke width', 1),
    strokeOpacity: number('Area stroke opacity', 1, opacityOptions),
    strokeLinecap: select('Area line cap', linecapOptions, 'round'),
    strokeLinejoin: select('Area line join', linejoinOptions, 'round')
  };

  return (
    <AreaChart
      data={data}
      x={d => d.x}
      y={d => d.y}
      width={number('Width', 640)}
      height={number('Height', 240)}
      xScale={scaleTime}
      yScale={scaleLinear}
      areaStyle={areaStyle}
    />
  );
};
