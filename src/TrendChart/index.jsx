import React, { PropTypes } from 'react';
import { Chart, Line } from 'react-d3-shape';

const TrendChart = (props) => {
  const { data, actualColor, expectedColor, actualStyle, expectedStyle,
    margins, width, height } = props;

  const chartSeries = [
    { field: 'actual', color: actualColor, style: actualStyle },
    { field: 'expected', color: expectedColor, style: expectedStyle }
  ];

  return (
    <Chart
      data={data}
      width={width}
      height={height}
      margins={margins}
      chartSeries={chartSeries}
      x={i => i.key}
    >
      <Line chartSeries={chartSeries} />
    </Chart>
  );
};

TrendChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.any,
    actual: PropTypes.any,
    expected: PropTypes.any
  })).isRequired,
  margins: PropTypes.shape({
    left: PropTypes.number,
    right: PropTypes.number,
    top: PropTypes.number,
    bottom: PropTypes.number
  }),
  actualStyle: PropTypes.object,
  expectedStyle: PropTypes.object,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  actualColor: PropTypes.string,
  expectedColor: PropTypes.string
};

TrendChart.defaultProps = {
  actualColor: '#ee675a',
  expectedColor: '#5e6066',
  actualStyle: {
    strokeWidth: 2,
    strokeOpacity: 0.8,
    fillOpacity: 0.8
  },
  expectedStyle: {
    strokeWidth: 2,
    strokeOpacity: 0.8,
    fillOpacity: 0.8
  },
  margins: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
};

export default TrendChart;
