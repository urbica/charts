import React, { PropTypes } from 'react';
import { path } from 'd3-path';
import { area, curveBasis } from 'd3-shape';

const Area = (props) => {
  const { data, defined, style, xScale, yScale, x, y } = props;
  const context = path();

  const areaGenerator = area()
    .x(d => xScale(x(d)))
    .y1(d => yScale(y(d)))
    .y0(yScale(0))
    .curve(curveBasis)
    .context(context)
    .defined(defined);

  areaGenerator(data);

  return <path d={context.toString()} style={style} />;
};

Area.propTypes = {
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

Area.defaultProps = {
};

export default Area;
