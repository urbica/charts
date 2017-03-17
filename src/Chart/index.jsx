import React, { PropTypes } from 'react';

const Chart = (props) => {
  const { margins, children } = props;
  const transform = `translate(${margins.left}, ${margins.top})`;

  return (
    <svg height={props.height} width={props.width}>
      <g transform={transform}>
        { children }
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
  height: PropTypes.number.isRequired
};

Chart.defaultProps = {
  margins: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
};

export default Chart;
