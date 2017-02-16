import React, { PropTypes } from 'react';
import { path } from 'd3-path';
import { line, curveBasis } from 'd3-shape';

const Line = (props) => {
  const { data, defined, style, xScale, yScale, x, y } = props;
  const context = path();

  const lineGenerator = line()
    .x(d => xScale(x(d)))
    .y(d => yScale(y(d)))
    .curve(curveBasis)
    .context(context)
    .defined(defined);

  lineGenerator(data);

  return <path d={context.toString()} fill="none" style={style} />;
};

Line.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.instanceOf(Date).isRequired,
    actual: PropTypes.any,
    expected: PropTypes.any
  })).isRequired,
  defined: PropTypes.func.isRequired,
  x: PropTypes.func.isRequired,
  y: PropTypes.func.isRequired,
  xScale: PropTypes.func.isRequired,
  yScale: PropTypes.func.isRequired,
  style: PropTypes.shape({
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeOpacity: PropTypes.number,
    strokeLinecap: PropTypes.string,
    strokeLinejoin: PropTypes.string
  }).isRequired
};

Line.defaultProps = {
};

export default Line;
