import React, { PureComponent, PropTypes } from 'react';
import { bisector } from 'd3-array';
import { select, mouse } from 'd3-selection';

class DataSeries extends PureComponent {
  componentDidMount() {
    const { data, x, xScale, onMouseOut, onMouseOver, onMouseMove } = this.props;

    const el = select(this.rect);

    if (onMouseOut) el.on('mouseout', onMouseOut);
    if (onMouseOver) el.on('mouseover', onMouseOver);

    if (onMouseMove) {
      const bisect = bisector(x).left;
      el.on('mousemove', function mousemove() {
        const [cx] = mouse(this);
        const x0 = xScale.invert(cx);
        const i = bisect(data, x0, 1);
        const d0 = data[i - 1];
        const d1 = data[i];
        const d = x0 - d0.date > d1.date - x0 ? d1 : d0;
        onMouseMove(d);
      });
    }
  }

  render() {
    const { width, height } = this.props;

    return (
      <g>
        { this.props.children }
        <rect
          ref={(ref) => { this.rect = ref; }}
          fill="none"
          width={width}
          height={height}
          pointerEvents="all"
        />
      </g>
    );
  }
}

DataSeries.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseMove: PropTypes.func,
  x: PropTypes.func,
  xScale: PropTypes.func,
  // yScale: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node.isRequired
};

DataSeries.defaultProps = {
  width: null,
  height: null,
  x: null,
  xScale: null,
  yScale: null,
  onMouseOut: null,
  onMouseOver: null,
  onMouseMove: null,
  data: []
};

export default DataSeries;
