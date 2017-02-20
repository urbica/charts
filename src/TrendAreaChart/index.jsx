import React, { PropTypes } from 'react';
import { extent } from 'd3-array';
import { timeDay } from 'd3-time';
import { scaleLinear, scaleTime } from 'd3-scale';

import Axis from '../Axis';
import Area from '../Area';

const TrendAreaChart = (props) => {
  const { data, actualStyle, expectedStyle, margins } = props;

  const width = props.width - margins.left - margins.right;
  const height = props.height - margins.top - margins.bottom;

  const xRange = props.xRange || [0, width];
  const yRange = props.yRange || [height, 0];

  const xScale = scaleTime().domain(extent(data, d => d.date)).range(xRange);
  const yScale = scaleLinear().domain(extent(data, d => d.expected)).range(yRange);

  const transform = `translate(${margins.left}, ${margins.top})`;

  return (
    <svg height={props.height} width={props.width}>
      <g transform={transform}>
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
    bottom: 20,
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
