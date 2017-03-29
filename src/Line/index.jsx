import React, { PropTypes } from 'react';
import { path } from 'd3-path';
import { line } from 'd3-shape';

const Line = (props) => {
  const { data, defined, curve, style, xScale, yScale, x, y } = props;
  const context = path();

  const lineGenerator = line()
    .x(d => xScale(x(d)))
    .y(d => yScale(y(d)))
    .context(context);

  if (curve) lineGenerator.curve(curve);
  if (defined) lineGenerator.defined(defined);

  lineGenerator(data);

  return <path d={context.toString()} fill="none" style={style} />;
};

Line.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  curve: PropTypes.func,
  defined: PropTypes.func,
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
  curve: PropTypes.null,
  defined: PropTypes.null
};

export default Line;
