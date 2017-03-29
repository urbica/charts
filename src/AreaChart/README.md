# AreaChart

[Live](https://urbica.github.io/components/?selectedKind=Charts&selectedStory=AreaChart)

## Usage

```js
import { AreaChart } from '@urbica/components';
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
* areaStyle: actual line style object


## Example

```js
import { AreaChart } from '@urbica/components';
import { curveBasis } from 'd3-shape';
import { scaleLinear, scaleTime } from 'd3-scale';

<AreaChart
  data={data}
  x={d => d.x}
  y={d => d.y}
  width={640}
  height={240}
  curve={curveBasis}
  xScale={scaleTime}
  yScale={scaleLinear}
  areaStyle={areaStyle}
/>
```
