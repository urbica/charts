import React, { PropTypes } from 'react';
import { extent } from 'd3-array';
import { scaleLinear, scaleTime } from 'd3-scale';

import Line from '../Line';

const TrendChart = (props) => {
  const { data, actualStyle, expectedStyle, width, height, margins } = props;
  const xScale = scaleTime().domain(extent(data, d => d.date)).range([0, width]);
  const yScale = scaleLinear().domain(extent(data, d => d.expected)).range([height, 0]);

  return (
    <svg height={height} width={width}>
      <g transform={`translate(${margins.left}, ${margins.top})`}>
        <Line
          data={data}
          x={d => d.date}
          y={d => d.expected}
          style={expectedStyle}
          xScale={xScale}
          yScale={yScale}
          defined={d => !!d.expected}
        />
        <Line
          data={data}
          x={d => d.date}
          y={d => d.actual}
          style={actualStyle}
          xScale={xScale}
          yScale={yScale}
          defined={d => !!d.actual}
        />
      </g>
    </svg>
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
