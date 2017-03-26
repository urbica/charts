import React, { PureComponent } from 'react';

export const withTooltip = (WrappedComponent) => {
  class Wrapper extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {};
      this.onMouseOut = this.onMouseOut.bind(this);
      this.onMouseOver = this.onMouseOver.bind(this);
      this.onMouseMove = this.onMouseMove.bind(this);
    }

    onMouseOut() {
      console.log('Wrapper onMouseOut');
    }

    onMouseOver() {
      console.log('Wrapper onMouseOver');
    }

    onMouseMove(data) {
      console.log('Wrapper onMouseMove', data);
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          onMouseOut={this.onMouseOut}
          onMouseOver={this.onMouseOver}
          onMouseMove={this.onMouseMove}
        />
      );
    }
  }

  return Wrapper;
};

export const Tooltip = (props) => {
  return <div>tooltip</div>;
};
