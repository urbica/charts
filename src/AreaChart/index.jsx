import React from 'react';
import PropTypes from 'prop-types';
import { extent } from 'd3-array';
import { scaleLinear } from 'd3-scale';

import Area from '../Area';
import Chart from '../Chart';

const AreaChart = (props) => {
  const { data, curve, defined, margins, areaStyle, x, y } = props;

  const width = props.width - margins.left - margins.right;
  const height = props.height - margins.top - margins.bottom;

  const xDomain = extent(data, x);
  const yDomain = extent(data, y);

  const xScale = props.xScale().range([0, width]).domain(xDomain);
  const yScale = props.yScale().range([height, 0]).domain(yDomain);

  return (
    <Chart height={props.height} width={props.width} margins={margins}>
      <Area
        data={data}
        x={x}
        y0={yScale(yDomain[0])}
        y1={y}
        curve={curve}
        style={areaStyle}
        xScale={xScale}
        yScale={yScale}
        defined={defined}
      />
    </Chart>
  );
};

AreaChart.propTypes = {
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
  areaStyle: PropTypes.shape({
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeOpacity: PropTypes.number,
    strokeLinecap: PropTypes.string,
    strokeLinejoin: PropTypes.string
  }),
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

AreaChart.defaultProps = {
  areaStyle: {
    fill: '#000'
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

export default AreaChart;
