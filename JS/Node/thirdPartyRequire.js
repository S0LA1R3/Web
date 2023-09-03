const _ = require('lodash')
setInterval(() => console.log(_.random(1, 1000)), 1000)
// nodemon thirdPartyRequire.js

const amogus = require('./amogus')
console.log(amogus.amogus)
