# Axis

## Usage

```js
import { Axis } from '@urbica/components';
import { timeHour } from 'd3-time';
import { timeFormat } from 'd3-time-format';

<Axis
  scale={xScale}
  ticks={timeDay}
  transform={`translate(0, ${height})`}
  orientation={'bottom'}
  tickFormat={timeFormat('%H')}
  tickArguments={[timeHour.every(1)]}
/>
```
