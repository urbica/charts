/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import renderer from 'react-test-renderer';
import { scaleLinear } from 'd3-scale';

import Line from './';

test('Line', () => {
  const width = 100;
  const height = 100;

  const data = [{ x: 0, y: 0 }, { x: 1, y: 1 }];

  const x = d => d.x;
  const y = d => d.y;

  const xScale = scaleLinear().range([0, width]).domain([0, 1]);
  const yScale = scaleLinear().range([height, 0]).domain([0, 1]);

  const style = { stroke: '#000' };

  const component = renderer.create(
    <Line
      data={data}
      x={x}
      y={y}
      xScale={xScale}
      yScale={yScale}
      style={style}
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
