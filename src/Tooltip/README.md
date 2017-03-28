# Tooltip

## Usage

```js
import { withTooltip } from '@urbica/components';
```

## Example

```js
import { Chart, withTooltip } from '@urbica/components';

const ChartWithTooltip = withTooltip(Chart);

<ChartWithTooltip
  data={data}
  height={height}
  margins={margins}
  width={width}
  x={d => d.date}
  xScale={xScale}
  yScale={yScale}
/>
```
