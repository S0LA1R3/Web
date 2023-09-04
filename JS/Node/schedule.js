const schedule = require('node-schedule')

const taks1 = schedule.scheduleJob('*/5 * 21 * * 0', function() {
    console.log('Running task 1!', new Date().getSeconds())
})

setTimeout(function(){
    taks1.cancel()
    console.log('Canceling task 1!')
}, 20000)
 
const rule = new schedule.RecurrenceRule()
rule.dayOfWeek = [new schedule.Range(0, 2)]
rule.hour = 21
rule.second = 30

const task2 = schedule.scheduleJob(rule, function(){
    console.log('Running taks 2!', new Date().getSeconds())
})
