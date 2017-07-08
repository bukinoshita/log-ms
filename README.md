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

timer.start()
setTimeout(() => console.log(`cool! ${timer.end()}`), 5000)
// => cool [5s]
```


## Demo

![](https://github.com/bukinoshita/log-ms/blob/master/demo.gif)


## API

### logms()

### Instance

#### start()

Start the `logms`. Returns the instance.

#### end()

Stop the `logms`. Returns the instance.


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
