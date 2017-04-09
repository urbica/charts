import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export const Tooltip = (props) => {
  const { top, left, data, show } = props;
  const style = {
    position: 'absolute',
    top,
    left,
    padding: 10,
    display: show ? 'block' : 'none',
    pointerEvents: 'none',
    backgroundColor: '#fff'
  };

  return (
    <div style={style}>
      {Object.keys(data).map(key => <div key={key}>{key}: {data[key].toString()}</div>)}
    </div>
  );
};

Tooltip.propTypes = {
  data: PropTypes.shape({}).isRequired,
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired
};

export const withTooltip = (WrappedComponent, options = {}) => {
  class TooltipWrapper extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        cx: 0,
        cy: 0,
        data: {},
        show: false
      };

      this.onMouseOut = this.onMouseOut.bind(this);
      this.onMouseOver = this.onMouseOver.bind(this);
      this.onMouseMove = this.onMouseMove.bind(this);
    }

    onMouseOut() {
      this.setState({ show: false });
    }

    onMouseOver() {
      this.setState({ show: true });
    }

    onMouseMove({ cx, cy, data }) {
      this.setState({ cx, cy, data });
    }

    render() {
      const { cx, cy, data, show } = this.state;
      const TooltipComponent = options.tooltip || Tooltip;

      return (
        <div>
          <WrappedComponent
            {...this.props}
            onMouseOut={this.onMouseOut}
            onMouseOver={this.onMouseOver}
            onMouseMove={this.onMouseMove}
          />
          <TooltipComponent data={data} show={show} top={cy} left={cx} />
        </div>
      );
    }
  }

  return TooltipWrapper;
};
