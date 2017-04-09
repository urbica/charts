import React from 'react';
import PropTypes from 'prop-types';
import { extent } from 'd3-array';
import { scaleLinear } from 'd3-scale';

import Line from '../Line';
import Chart from '../Chart';

const LineChart = (props) => {
  const { data, curve, defined, margins, lineStyle, x, y } = props;

  const width = props.width - margins.left - margins.right;
  const height = props.height - margins.top - margins.bottom;

  const xDomain = extent(data, x);
  const yDomain = extent(data, y);

  const xScale = props.xScale().range([0, width]).domain(xDomain);
  const yScale = props.yScale().range([height, 0]).domain(yDomain);

  return (
    <Chart height={props.height} width={props.width} margins={margins}>
      <Line
        data={data}
        x={x}
        y={y}
        curve={curve}
        style={lineStyle}
        xScale={xScale}
        yScale={yScale}
        defined={defined}
      />
    </Chart>
  );
};

LineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  x: PropTypes.func.isRequired,
  y: PropTypes.func.isRequired,
  xScale: PropTypes.func,
  yScale: PropTypes.func,
  defined: PropTypes.func,
  curve: PropTypes.func,
  margins: PropTypes.shape({
    left: PropTypes.number,
    right: PropTypes.number,
    top: PropTypes.number,
    bottom: PropTypes.number
  }),
  lineStyle: PropTypes.shape({
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeOpacity: PropTypes.number,
    strokeLinecap: PropTypes.string,
    strokeLinejoin: PropTypes.string
  }),
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

LineChart.defaultProps = {
  lineStyle: {
    stroke: '#000'
  },
  margins: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  xScale: scaleLinear,
  yScale: scaleLinear,
  curve: PropTypes.null,
  defined: PropTypes.null
};

export default LineChart;
