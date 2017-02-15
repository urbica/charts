import React, { PropTypes } from 'react';
import { path } from 'd3-path';
import { extent } from 'd3-array';
import { line, curveBasis } from 'd3-shape';
import { scaleLinear, scaleTime } from 'd3-scale';

const getContexts = (width, height, data) => {
  const actualContext = path();
  const expectedContext = path();

  const x = scaleTime()
    .domain(extent(data, d => d.date))
    .range([0, width]);

  const y = scaleLinear()
    .domain(extent(data, d => d.expected))
    .range([height, 0]);

  const actualLineGenerator = line()
    .x(d => x(d.date))
    .y(d => y(d.actual))
    .curve(curveBasis)
    .context(actualContext)
    .defined(d => !!d.actual);

  const expectedLineGenerator = line()
    .x(d => x(d.date))
    .y(d => y(d.expected))
    .curve(curveBasis)
    .context(expectedContext)
    .defined(d => !!d.expected);

  actualLineGenerator(data);
  expectedLineGenerator(data);

  return { actualContext, expectedContext };
};

const TrendChart = (props) => {
  const { data, actualStyle, expectedStyle, width, height, margins } = props;
  const { actualContext, expectedContext } = getContexts(width, height, data);

  const transform = `translate(${margins.left}, ${margins.top})`;

  return (
    <svg height={height} width={width}>
      <g transform={transform}>
        <path d={expectedContext.toString()} fill="none" style={expectedStyle} />
        <path d={actualContext.toString()} fill="none" style={actualStyle} />
      </g>
    </svg>
  );
};

TrendChart.propTypes = {
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
