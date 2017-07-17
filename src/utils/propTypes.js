import PropTypes from 'prop-types';

export const marginProps = PropTypes.shape({
  left: PropTypes.number,
  right: PropTypes.number,
  top: PropTypes.number,
  bottom: PropTypes.number
});

export const lineProps = PropTypes.shape({
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
  strokeOpacity: PropTypes.number,
  strokeLinecap: PropTypes.string,
  strokeLinejoin: PropTypes.string
});

export const fillProps = PropTypes.shape({
  fill: PropTypes.string,
  fillOpacity: PropTypes.number,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
  strokeOpacity: PropTypes.number,
  strokeLinecap: PropTypes.string,
  strokeLinejoin: PropTypes.string
});

export const textProps = PropTypes.shape({
  fill: PropTypes.string,
  fillOpacity: PropTypes.number,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
  strokeOpacity: PropTypes.number,
  strokeLinecap: PropTypes.string,
  strokeLinejoin: PropTypes.string
});
