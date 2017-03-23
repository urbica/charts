import React, { PropTypes } from 'react';
import { extent } from 'd3-array';
import { scaleLinear, scaleTime } from 'd3-scale';

import Axis from '../Axis';
import Area from '../Area';
import Chart from '../Chart';
import { getDomain } from '../utils';

const TrendAreaChart = (props) => {
  const { data, margins, actualStyle, expectedStyle, axisStyle, textStyle } = props;

  const width = props.width - margins.left - margins.right;
  const height = props.height - margins.top - margins.bottom;

  const xDomain = extent(data, d => d.date);
  const yDomain = getDomain(['actual', 'expected'], data);

  const xScale = scaleTime().range([0, width]).domain(xDomain);
  const yScale = scaleLinear().range([height, 0]).domain(yDomain);

  return (
    <Chart height={props.height} width={props.width} margins={margins}>
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
        axisStyle={axisStyle}
        textStyle={textStyle}
        orientation={'bottom'}
        tickFormat={props.xTickFormat}
        tickArguments={props.xTickArguments}
      />
      <Axis
        scale={yScale}
        axisStyle={axisStyle}
        textStyle={textStyle}
        orientation={'left'}
        tickFormat={props.yTickFormat}
        tickArguments={props.yTickArguments}
      />
    </Chart>
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
  axisStyle: PropTypes.shape({
    fill: PropTypes.string,
    fillOpacity: PropTypes.number,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeOpacity: PropTypes.number,
    strokeLinecap: PropTypes.string,
    strokeLinejoin: PropTypes.string
  }),
  textStyle: PropTypes.shape({
    fill: PropTypes.string,
    fillOpacity: PropTypes.number,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeOpacity: PropTypes.number,
    strokeLinecap: PropTypes.string,
    strokeLinejoin: PropTypes.string
  }),
  xTickArguments: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func
  ]),
  xTickFormat: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func
  ]),
  yTickArguments: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func
  ]),
  yTickFormat: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func
  ]),
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

TrendAreaChart.defaultProps = {
  xTickArguments: undefined,
  xTickFormat: undefined,
  yTickArguments: undefined,
  yTickFormat: undefined,
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
  },
  axisStyle: {
    stroke: '#000'
  },
  textStyle: {
    fill: '#000'
  }
};

export default TrendAreaChart;
