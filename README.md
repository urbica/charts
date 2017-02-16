# Urbica Components

[React Storybook](http://urbica.github.io/components)

## Usage

```shell
npm i -S @urbica/components
```

## Components

### Line

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

### Area

```js
import { Area } from '@urbica/components';

<Area
  data={data}
  x={d => d.key}
  y={d => d.value}
  style={style}
  xScale={xScale}
  yScale={yScale}
  defined={d => !!d.value}
/>
```

### Axis

```js
import { Axis } from '@urbica/components';

<Axis
  scale={xScale}
  ticks={timeDay}
  transform={`translate(0, ${height})`}
  orientation={'bottom'}
/>
```

### TrendChart

Trend chart is a graphical representation of time series data (information in sequence over time) showing the trend line or curve that reveals a general pattern of change.

```js
import { TrendChart } from '@urbica/components';
```

```js
<TrendChart data={data} width={1000} height={100}/>
```

[Live](https://urbica.github.io/components/?selectedKind=Charts&selectedStory=TrendChart)
[Usage](https://github.com/urbica/components/blob/master/src/TrendChart)

### TrendAreaChart

Trend chart is a graphical representation of time series data (information in sequence over time) showing the trend line or curve that reveals a general pattern of change.

```js
import { TrendAreaChart } from '@urbica/components';
```

```js
<TrendAreaChart data={data} width={1000} height={100}/>
```

[Live](https://urbica.github.io/components/?selectedKind=Charts&selectedStory=TrendAreaChart)
[Usage](https://github.com/urbica/components/blob/master/src/TrendAreaChart)
