'use strict'

const chalk = require('chalk')
const ms = require('ms')

class LogMs {
  start () {
    this.start = new Date()
  }

  end () {
    const elapsed = ms(new Date() - this.start)
    return `${chalk.gray(`[${elapsed}]`)}`
  }
}

module.exports = function () {
  return new LogMs()
}
