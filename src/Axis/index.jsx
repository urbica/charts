import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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
    const { tickArguments, tickFormat, axisStyle, textStyle } = this.props;
    const axisGenerator = orientations[this.props.orientation];
    const axis = axisGenerator(this.props.scale);

    if (tickFormat) axis.tickFormat(tickFormat);
    if (tickArguments) axis.tickArguments(tickArguments);

    const el = select(this.axis);
    el.call(axis);

    const elPath = el.selectAll('path');
    const elLine = el.selectAll('line');
    Object.entries(axisStyle).forEach(([key, value]) => {
      elPath.style(key, value);
      elLine.style(key, value);
    });

    const elText = el.selectAll('text');
    Object.entries(textStyle).forEach(([key, value]) => elText.style(key, value));
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
  tickArguments: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func
  ]),
  tickFormat: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func
  ]),
  axisStyle: PropTypes.shape({
    fill: PropTypes.string,
    fillOpacity: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeOpacity: PropTypes.number,
    strokeLinecap: PropTypes.string,
    strokeLinejoin: PropTypes.string
  }),
  textStyle: PropTypes.shape({
    fill: PropTypes.string,
    fillOpacity: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeOpacity: PropTypes.number,
    strokeLinecap: PropTypes.string,
    strokeLinejoin: PropTypes.string
  })
};

Axis.defaultProps = {
  tickArguments: undefined,
  tickFormat: undefined,
  transform: undefined,
  axisStyle: {
    stroke: '#000'
  },
  textStyle: {
    fill: '#000'
  }
};

export default Axis;
