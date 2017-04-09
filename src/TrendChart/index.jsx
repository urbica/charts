import React from 'react';
import PropTypes from 'prop-types';
import { extent } from 'd3-array';
import { curveBasis } from 'd3-shape';
import { scaleLinear, scaleTime } from 'd3-scale';

import Line from '../Line';
import Chart from '../Chart';
import { getDomain } from '../utils';

const TrendChart = (props) => {
  const { data, margins, actualStyle, expectedStyle } = props;

  const width = props.width - margins.left - margins.right;
  const height = props.height - margins.top - margins.bottom;

  const xDomain = extent(data, d => d.date);
  const yDomain = getDomain(['actual', 'expected'], data);

  const xScale = scaleTime().range([0, width]).domain(xDomain);
  const yScale = scaleLinear().range([height, 0]).domain(yDomain);

  return (
    <Chart height={props.height} width={props.width} margins={margins}>
      <Line
        data={data}
        x={d => d.date}
        y={d => d.expected}
        style={expectedStyle}
        xScale={xScale}
        yScale={yScale}
        curve={curveBasis}
        defined={d => !isNaN(d.expected)}
      />
      <Line
        data={data}
        x={d => d.date}
        y={d => d.actual}
        style={actualStyle}
        xScale={xScale}
        yScale={yScale}
        curve={curveBasis}
        defined={d => !isNaN(d.actual)}
      />
    </Chart>
  );
};

TrendChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.instanceOf(Date).isRequired,
    actual: PropTypes.any,
    expected: PropTypes.any
  })).isRequired,
  margins: PropTypes.shape({
    left: PropTypes.number,
    right: PropTypes.number,
    top: PropTypes.number,
    bottom: PropTypes.number
  }),
  actualStyle: PropTypes.shape({
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeOpacity: PropTypes.number,
    strokeLinecap: PropTypes.string,
    strokeLinejoin: PropTypes.string
  }),
  expectedStyle: PropTypes.shape({
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeOpacity: PropTypes.number,
    strokeLinecap: PropTypes.string,
    strokeLinejoin: PropTypes.string
  }),
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
  // xRange: PropTypes.arrayOf(PropTypes.number),
  // yRange: PropTypes.arrayOf(PropTypes.number)
};

TrendChart.defaultProps = {
  actualStyle: {
    stroke: '#ee675a',
    strokeWidth: 2,
    strokeOpacity: 1,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  },
  expectedStyle: {
    stroke: '#5e6066',
    strokeWidth: 2,
    strokeOpacity: 1,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  },
  margins: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
};

export default TrendChart;
