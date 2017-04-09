import React from 'react';
import PropTypes from 'prop-types';
import { path } from 'd3-path';
import { area } from 'd3-shape';

const Area = (props) => {
  const { data, curve, defined, style, xScale, yScale, x, y0, y1 } = props;
  const context = path();

  const areaGenerator = area()
    .x(d => xScale(x(d)))
    .y1(d => yScale(y1(d)))
    .y0(y0)
    .context(context);

  if (curve) areaGenerator.curve(curve);
  if (defined) areaGenerator.defined(defined);

  areaGenerator(data);

  return <path d={context.toString()} style={style} />;
};

Area.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  curve: PropTypes.func,
  defined: PropTypes.func,
  x: PropTypes.func.isRequired,
  y0: PropTypes.number.isRequired,
  y1: PropTypes.func.isRequired,
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

Area.defaultProps = {
  curve: PropTypes.null,
  defined: PropTypes.null
};

export default Area;
