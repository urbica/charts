/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import renderer from 'react-test-renderer';

import Chart from './';

test('Chart', () => {
  const component = renderer.create(
    <Chart height={100} width={100} />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Chart with mouse events', () => {
  const x = d => d.x;
  const onMouseMove = () => true;
  const onMouseOut = () => true;
  const onMouseOver = () => true;

  const component = renderer.create(
    <Chart
      height={100}
      width={100}
      x={x}
      onMouseMove={onMouseMove}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
