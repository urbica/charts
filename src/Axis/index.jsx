import React, { PropTypes, PureComponent } from 'react';
import { select } from 'd3-selection';
import { axisTop, axisRight, axisBottom, axisLeft } from 'd3-axis';

const orientations = {
  top: axisTop,
  right: axisRight,
  bottom: axisBottom,
  left: axisLeft
};

class Axis extends PureComponent {
  componentDidMount() {
    const { orientation, scale, ticks } = this.props;
    const axisGenerator = orientations[orientation];
    const axis = axisGenerator(scale);
    if (ticks) axis.ticks(ticks);

    select(this.axis).call(axis);
  }

  render() {
    const { transform } = this.props;
    return (
      <g ref={(ref) => { this.axis = ref; }} transform={transform} />
    );
  }
}

Axis.propTypes = {
  orientation: PropTypes.string.isRequired,
  scale: PropTypes.func.isRequired,
  transform: PropTypes.string,
  ticks: PropTypes.func
};

Axis.defaultProps = {
  ticks: undefined,
  transform: undefined
};

export default Axis;
