const moment = require('moment')

let start = moment([2016, 10, 24])
let iterations = 300

const dates = []

for (let i=0; i<iterations; i++) {
  dates.push(start.format('YYYY/MM/DD'))
  start.add(1, 'w')
}

console.log(JSON.stringify(dates))
