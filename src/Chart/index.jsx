import React, { PropTypes } from 'react';
import DataSeries from '../DataSeries';

const Chart = (props) => {
  const { children, margins, onMouseOut, onMouseOver, onMouseMove } = props;
  const transform = `translate(${margins.left}, ${margins.top})`;

  return (
    <svg height={props.height} width={props.width}>
      <g transform={transform}>
        {React.Children.map(children, (child) => {
          if (child.type === DataSeries) {
            return React.cloneElement(child, {
              onMouseOut,
              onMouseOver,
              onMouseMove
            });
          }

          return child;
        })}
      </g>
    </svg>
  );
};

Chart.propTypes = {
  children: PropTypes.node.isRequired,
  margins: PropTypes.shape({
    left: PropTypes.number,
    right: PropTypes.number,
    top: PropTypes.number,
    bottom: PropTypes.number
  }),
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseMove: PropTypes.func
};

Chart.defaultProps = {
  onMouseOut: null,
  onMouseOver: null,
  onMouseMove: null,
  margins: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
};

export default Chart;
