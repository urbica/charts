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
