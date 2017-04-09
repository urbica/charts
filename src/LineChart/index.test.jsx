/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import renderer from 'react-test-renderer';
import { scaleLinear } from 'd3-scale';

import LineChart from './';

test('LineChart', () => {
  const data = [{ x: 0, y: 0 }, { x: 1, y: 1 }];
  const x = d => d.x;
  const y = d => d.y;
  const style = { stroke: '#000' };

  const component = renderer.create(
    <LineChart
      data={data}
      x={x}
      y={y}
      xScale={scaleLinear}
      yScale={scaleLinear}
      style={style}
      width={100}
      height={100}
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
