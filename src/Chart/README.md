# Chart

## Usage

```js
import { Chart } from '@urbica/components';
```

## Properties

* margins: `{ top, right, bottom, left }`
* width: chart width **required**
* height: chart height **required**

## Example

```js
import { Chart, Line } from '@urbica/components';

const data = [];
for (let i = 1; i <= 10; i += 1) {
  const date = new Date(3600 * 24 * 1000 * i);
  const value = Math.random();
  data.push({ date, value });
}

<Chart width={100} height={100}>
  <Line
    data={data}
    x={d => d.date}
    y={d => d.value}
    xScale={xScale}
    yScale={yScale}
    defined={d => !!d.value}
  />
</Chart>
```
