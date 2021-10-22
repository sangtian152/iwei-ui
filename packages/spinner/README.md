# zmbl-spinner
> spinner.

## Install
```shell
npm i zmbl-spinner -S
```

## Required
```shell
npm i babel-plugin-component -D
```

## Usage
import all spinner
```javascript
import Vue from 'vue';
import Spinner from 'zmbl-spinner';

Vue.use(Spinner);
```

```html
<zmbl-spinner></zmbl-spinner>
```

import one spinner

```javascript
import Vue from 'vue';
import { DoubleBounce } from 'zmbl-spinner';

Vue.component(DoubleBounce.name, DoubleBounce);
```

```html
<double-bounce></double-bounce>
```

.babelrc
```json
{
  "plugins": [
    "xxx",
    ["component", [
        {
          "libraryName": "zmbl-spinner",
          "style": true
        }
      ]
    ]
  ]
}
```

**`import Spinner from 'zmbl-spinner'` and `import { DoubleBounce } from 'zmbl-spinner'` can not be used together.**.

## Spinner
- snake
- double-bounce
- triple-bounce
- fading-circle

## API

### color
- type: String

### size
- type: Number

### type
- type: String|Number

```html
<zmbl-spinner :type="0"></zmbl-spinner>
<zmbl-spinner type="snake"></zmbl-spinner>

<zmbl-spinner :type="1"></zmbl-spinner>
<zmbl-spinner type="double-bounce"></zmbl-spinner>

<zmbl-spinner :type="2"></zmbl-spinner>
<zmbl-spinner type="triple-bounce"></zmbl-spinner>

<zmbl-spinner :type="3"></zmbl-spinner>
<zmbl-spinner type="fading-circle"></zmbl-spinner>
```

## Development

```shell
make dev
```

## Production
```
make dist
```

## License
MIT
