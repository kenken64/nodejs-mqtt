'use strict'

const mqtt = require('mqtt');
const client = mqtt.connect({
    host: 'm15.cloudmqtt.com',
    port: 18950,
    username: 'vlrioyiy',
    password: 'af1UtbqGHaU4'
});

client.on('connect', () => {
client.subscribe('myhome/kitchen/fridge/temp', (err, granted) => {
    if (!err) {
        client.on('message', (topic, msg) => {
            console.log('topic: ', topic);
            console.log('message: ', JSON.parse(msg.toString()))
        })
    }
})
});