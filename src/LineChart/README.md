# LineChart

[Live](https://urbica.github.io/components/?selectedKind=Charts&selectedStory=LineChart)

## Usage

```js
import { LineChart } from '@urbica/components';
```

## Properties

* width: chart width **required**
* height: chart height **required**
* data: array of objects **required**
* x: x accessor function **required**
* y: y accessor function **required**
* xScale: xScale function
* yScale: yScale function
* margins: `{ top, right, bottom, left }`
* lineStyle: actual line style object


## Example

```js
import { LineChart } from '@urbica/components';
import { curveBasis } from 'd3-shape';
import { scaleLinear, scaleTime } from 'd3-scale';

<LineChart
  data={data}
  x={d => d.x}
  y={d => d.y}
  width={640}
  height={240}
  curve={curveBasis}
  xScale={scaleTime}
  yScale={scaleLinear}
  lineStyle={lineStyle}
/>
```
