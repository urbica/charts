import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bisector } from 'd3-array';
import { select, mouse } from 'd3-selection';

class Chart extends PureComponent {
  componentDidMount() {
    const { data, x, xScale, onMouseOut, onMouseOver, onMouseMove, margins } = this.props;

    const el = select(this.rect);

    if (onMouseOut) el.on('mouseout', onMouseOut);
    if (onMouseOver) el.on('mouseover', onMouseOver);

    if (onMouseMove && x) {
      const bisect = bisector(x).left;
      el.on('mousemove', function mousemove() {
        const [cx, cy] = mouse(this);
        const x0 = xScale.invert(cx);
        const i = bisect(data, x0, 1);
        const d0 = data[i - 1];
        const d1 = data[i];
        const d = x0 - x(d0) > x(d1) - x0 ? d1 : d0;
        onMouseMove({
          cx: cx + margins.left,
          cy: cy + margins.top,
          data: d
        });
      });
    }
  }

  render() {
    const { children, margins, onMouseOut, onMouseOver, onMouseMove } = this.props;
    const transform = `translate(${margins.left}, ${margins.top})`;

    const width = this.props.width - margins.left - margins.right;
    const height = this.props.height - margins.top - margins.bottom;

    const showRect = onMouseMove || onMouseOver || onMouseOut;

    return (
      <svg height={this.props.height} width={this.props.width}>
        <g transform={transform}>
          {children}
          {showRect &&
            <rect
              ref={(ref) => {
                this.rect = ref;
              }}
              fill="none"
              width={width}
              height={height}
              pointerEvents="all"
            />}
        </g>
      </svg>
    );
  }
}

Chart.propTypes = {
  children: PropTypes.node,
  data: PropTypes.arrayOf(PropTypes.object),
  height: PropTypes.number.isRequired,
  margins: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number
  }),
  onMouseMove: PropTypes.func,
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func,
  width: PropTypes.number.isRequired,
  x: PropTypes.func,
  xScale: PropTypes.func
};

Chart.defaultProps = {
  children: PropTypes.null,
  data: [],
  margins: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  onMouseMove: PropTypes.null,
  onMouseOut: PropTypes.null,
  onMouseOver: PropTypes.null,
  x: PropTypes.null,
  xScale: PropTypes.null
};

export default Chart;
