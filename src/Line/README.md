# Line

## Usage

```js
import { Line } from '@urbica/components';

<Line
  data={data}
  x={d => d.key}
  y={d => d.value}
  style={style}
  xScale={xScale}
  yScale={yScale}
  defined={d => !!d.value}
/>
```
