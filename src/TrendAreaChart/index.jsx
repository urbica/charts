import React, { PropTypes } from 'react';
import { extent } from 'd3-array';
import { timeDay } from 'd3-time';
import { scaleLinear, scaleTime } from 'd3-scale';

import Axis from '../Axis';
import Area from '../Area';

const TrendAreaChart = (props) => {
  const { data, actualStyle, expectedStyle, width, height, margins } = props;
  const xScale = scaleTime().domain(extent(data, d => d.date)).range([0, width]);
  const yScale = scaleLinear().domain(extent(data, d => d.expected)).range([height, 0]);

  return (
    <svg height={height} width={width}>
      <g transform={`translate(${margins.left}, ${margins.top})`}>
        <Area
          data={data}
          x={d => d.date}
          y={d => d.expected}
          style={expectedStyle}
          xScale={xScale}
          yScale={yScale}
          defined={d => !!d.expected}
        />
        <Area
          data={data}
          x={d => d.date}
          y={d => d.actual}
          style={actualStyle}
          xScale={xScale}
          yScale={yScale}
          defined={d => !!d.actual}
        />
      </g>
      <Axis
        scale={xScale}
        ticks={timeDay}
        transform={`translate(0, ${height})`}
        orientation={'bottom'}
      />
    </svg>
  );
};

TrendAreaChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.instanceOf(Date).isRequired,
    actual: PropTypes.any,
    expected: PropTypes.any
  })).isRequired,
  // paddings: PropTypes.shape({
  //   left: PropTypes.number,
  //   right: PropTypes.number,
  //   top: PropTypes.number,
  //   bottom: PropTypes.number
  // }),
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
