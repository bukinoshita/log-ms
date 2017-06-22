# log-ms [![Build Status](https://travis-ci.org/bukinoshita/log-ms.svg?branch=master)](https://travis-ci.org/bukinoshita/log-ms)

> Elegant instance execution time in ms

## Install

```
$ npm install --save log-ms
```

## Usage
```js
const logms = require('log-ms')

const timer = logms()

const fn = (x, y) => {
  timer.start()
  let result = 0
  const ns = Array.apply(null, { length: 1000 }).map(Number.call, Number)


  ns.forEach(n => {
    result += x + y
    result -= y / x
  })

  console.log(`The result is '${parseInt(result)}' ${timer.end()}`)
}

fn(17, 1)
// => The result is '17941' [1ms]

and with `console.time()` and `console.timeEnd()` the output would be:
//=> undefined: 1.019ms
```

## Demo

![](https://github.com/bukinoshita/log-ms/blob/master/demo.gif)

## API

### logms()

### Instance

#### start()

Start the `logms`. Returns the instance.

#### stop()

Stop the `logms`. Returns the instance.

## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
