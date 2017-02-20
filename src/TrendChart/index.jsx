import React, { PropTypes } from 'react';
import { extent } from 'd3-array';
import { timeDay } from 'd3-time';
import { scaleLinear, scaleTime } from 'd3-scale';

import Axis from '../Axis';
import Line from '../Line';

const TrendChart = (props) => {
  const { data, actualStyle, expectedStyle, margins } = props;

  const width = props.width - margins.left - margins.right;
  const height = props.height - margins.top - margins.bottom;

  const xRange = props.xRange || [0, width - margins.left - margins.right];
  const yRange = props.yRange || [height - margins.top - margins.bottom, 0];

  const xScale = scaleTime().domain(extent(data, d => d.date)).range(xRange);
  const yScale = scaleLinear().domain(extent(data, d => d.expected)).range(yRange);

  return (
    <svg height={props.height} width={props.width}>
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
        <Axis
          scale={xScale}
          ticks={timeDay}
          transform={`translate(0, ${height})`}
          orientation={'bottom'}
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
  height: PropTypes.number.isRequired,
  xRange: PropTypes.arrayOf(PropTypes.number),
  yRange: PropTypes.arrayOf(PropTypes.number)
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
