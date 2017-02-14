import React, { PropTypes } from 'react';
import { path } from 'd3-path';
import { area } from 'd3-shape';
import { extent } from 'd3-array';
import { scaleLinear, scaleTime } from 'd3-scale';

const getArea = (width, height, data, key) => {
  const x = scaleTime().range([0, width]);
  const y = scaleLinear().range([height, 0]);
  const context = path();

  const newArea = area()
    .context(context)
    .x(d => x(d.date))
    .y1(d => y(d[key]))
    .y0(y(0));

  x.domain(extent(data, d => d.date));
  y.domain(extent(data, d => d[key]));

  newArea(data);

  return context;
};

const TrendAreaChart = (props) => {
  const { data, actualStyle, expectedStyle, width, height, margins } = props;

  const actualLine = getArea(width, height, data, 'actual');
  const expectedLine = getArea(width, height, data, 'expected');

  const transform = `translate(${margins.left}, ${margins.top})`;

  return (
    <svg height={height} width={width}>
      <g transform={transform}>
        <path
          d={expectedLine.toString()}
          fill={actualStyle.fill}
          style={expectedStyle}
          stroke={expectedStyle.stroke}
        />
        <path
          d={actualLine.toString()}
          fill={actualStyle.fill}
          style={actualStyle}
          stroke={actualStyle.stroke}
        />
      </g>
    </svg>
  );
};

TrendAreaChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.any,
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
    fill: PropTypes.string,
    stroke: PropTypes.string,
    fillOpacity: PropTypes.number,
    strokeWidth: PropTypes.number,
    strokeOpacity: PropTypes.number
  }),
  expectedStyle: PropTypes.shape({
    fill: PropTypes.string,
    stroke: PropTypes.string,
    fillOpacity: PropTypes.number,
    strokeWidth: PropTypes.number,
    strokeOpacity: PropTypes.number
  }),
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

TrendAreaChart.defaultProps = {
  actualStyle: {
    stroke: '#ee675a',
    strokeWidth: 2,
    strokeOpacity: 0.8
  },
  expectedStyle: {
    stroke: '#5e6066',
    strokeWidth: 2,
    strokeOpacity: 0.8
  },
  margins: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
};

export default TrendAreaChart;
