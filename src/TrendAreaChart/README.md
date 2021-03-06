# TrendAreaChart

Trend chart is a graphical representation of time series data (information in sequence over time) showing the trend line or curve that reveals a general pattern of change.

[Live](https://urbica.github.io/components/?selectedKind=Charts&selectedStory=TrendAreaChart)

## Usage

```js
import { TrendAreaChart } from '@urbica/components';
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
const data = [];
for (let i = 1; i <= 10; i += 1) {
  const date = new Date(3600 * 24 * 1000 * i);
  const actual = Math.random();
  const expected = Math.random();
  data.push({ date, expected, actual });
}

<TrendAreaChart data={data} width={1000} height={100}/>
```
