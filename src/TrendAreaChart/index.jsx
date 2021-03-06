import React from 'react';
import PropTypes from 'prop-types';
import { extent } from 'd3-array';
import { curveBasis } from 'd3-shape';
import { scaleLinear, scaleTime } from 'd3-scale';

import Axis from '../Axis';
import Area from '../Area';
import Chart from '../Chart';
import { getDomain } from '../utils';
import { marginProps, lineProps, fillProps, textProps } from '../utils/propTypes';

const TrendAreaChart = (props) => {
  const { data, margins } = props;

  const width = props.width - margins.left - margins.right;
  const height = props.height - margins.top - margins.bottom;

  const xDomain = props.xDomain || extent(data, d => d.date);
  const yDomain = props.yDomain || getDomain(['actual', 'expected'], data);

  const xScale = scaleTime().range([0, width]).domain(xDomain);
  const yScale = scaleLinear().range([height, 0]).domain(yDomain);

  return (
    <Chart
      data={data}
      height={props.height}
      margins={margins}
      width={props.width}
      x={d => d.date}
      xScale={xScale}
      yScale={yScale}
    >
      <Area
        data={data}
        x={d => d.date}
        y0={yScale(yDomain[0])}
        y1={d => d.expected}
        style={props.expectedStyle}
        xScale={xScale}
        yScale={yScale}
        curve={curveBasis}
        defined={d => !isNaN(d.expected)}
        width={width}
        height={height}
      />
      <Area
        data={data}
        x={d => d.date}
        y0={yScale(yDomain[0])}
        y1={d => d.actual}
        style={props.actualStyle}
        xScale={xScale}
        yScale={yScale}
        curve={curveBasis}
        defined={d => !isNaN(d.actual)}
      />
      <Axis
        scale={xScale}
        orientation={'bottom'}
        transform={`translate(0, ${height})`}
        axisStyle={props.axisStyle}
        textStyle={props.textStyle}
        tickFormat={props.xTickFormat}
        tickArguments={props.xTickArguments}
      />
      <Axis
        scale={yScale}
        orientation={'left'}
        axisStyle={props.axisStyle}
        textStyle={props.textStyle}
        tickFormat={props.yTickFormat}
        tickArguments={props.yTickArguments}
      />
    </Chart>
  );
};

TrendAreaChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.instanceOf(Date).isRequired,
      actual: PropTypes.any,
      expected: PropTypes.any
    })
  ).isRequired,
  margins: marginProps,
  actualStyle: lineProps,
  expectedStyle: lineProps,
  axisStyle: fillProps,
  textStyle: textProps,
  xDomain: PropTypes.arrayOf(PropTypes.number),
  yDomain: PropTypes.arrayOf(PropTypes.number),
  xTickArguments: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
  xTickFormat: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
  yTickArguments: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
  yTickFormat: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

TrendAreaChart.defaultProps = {
  xDomain: PropTypes.null,
  yDomain: PropTypes.null,
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
