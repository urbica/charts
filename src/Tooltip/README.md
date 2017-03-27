# Tooltip

## Usage

```js
import { withTooltip } from '@urbica/components';
```

## Properties

* data: array of objects `{ key, actual, expected }` **required**
* margins: `{ top, right, bottom, left }`
* actualStyle: actual area style object
* expectedStyle: expected area style object
* width: chart width **required**
* height: chart height **required**


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
