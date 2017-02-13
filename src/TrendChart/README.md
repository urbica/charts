# TrendChart

Trend chart is a graphical representation of time series data (information in sequence over time) showing the trend line or curve that reveals a general pattern of change.

[Live](https://urbica.github.io/components/?selectedKind=Charts&selectedStory=TrendChart)

## Usage

```js
import { TrendChart } from '@urbica/components';
```

## Properties

* data: array of objects `{ key, actual, expected }` **required**
* margins: `{ top, right, bottom, left }`
* actualStyle: actual line style object
* expectedStyle: expected line style object
* width: chart width **required**
* height: chart height **required**
* actualColor: actual line color
* expectedColor: expected line color


## Example

```js
<TrendChart data={data} width={1000} height={100}/>
```
