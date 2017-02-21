import React, { PropTypes } from 'react';
import { extent } from 'd3-array';
import { scaleLinear, scaleTime } from 'd3-scale';

import Axis from '../Axis';
import Area from '../Area';
import { getDomain } from '../utils';

const TrendAreaChart = (props) => {
  const { data, margins, actualStyle, expectedStyle } = props;

  const width = props.width - margins.left - margins.right;
  const height = props.height - margins.top - margins.bottom;

  const xDomain = extent(data, d => d.date);
  const yDomain = getDomain(['actual', 'expected'], data);

  const xScale = scaleTime().range([0, width]).domain(xDomain);
  const yScale = scaleLinear().range([height, 0]).domain(yDomain);

  return (
    <svg width={props.width} height={props.height}>
      <g transform={`translate(${margins.left}, ${margins.top})`}>
        <Area
          data={data}
          x={d => d.date}
          y0={yScale(yDomain[0])}
          y1={d => d.expected}
          style={expectedStyle}
          xScale={xScale}
          yScale={yScale}
          defined={d => !isNaN(d.expected)}
        />
        <Area
          data={data}
          x={d => d.date}
          y0={yScale(yDomain[0])}
          y1={d => d.actual}
          style={actualStyle}
          xScale={xScale}
          yScale={yScale}
          defined={d => !isNaN(d.actual)}
        />
        <Axis
          scale={xScale}
          transform={`translate(0, ${height})`}
          orientation={'bottom'}
        />
        <Axis
          scale={yScale}
          orientation={'left'}
        />
      </g>
    </svg>
  );
};

TrendAreaChart.propTypes = {
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
  height: PropTypes.number.isRequired,
  xRange: PropTypes.arrayOf(PropTypes.number),
  yRange: PropTypes.arrayOf(PropTypes.number)
};

TrendAreaChart.defaultProps = {
  paddings: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  margins: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  actualStyle: {
    fill: '#ee675a',
    fillOpacity: 0.6,
    stroke: '#ee675a',
    strokeWidth: 2,
    strokeOpacity: 1,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  },
  expectedStyle: {
    fill: '#5e6066',
    fillOpacity: 0.6,
    stroke: '#5e6066',
    strokeWidth: 2,
    strokeOpacity: 1,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }
};

export default TrendAreaChart;
