'use strict'
const mqtt = require('async-mqtt');

const client = mqtt.connect({
    host: 'm15.cloudmqtt.com',
    port: 18950,
    username: 'vlrioyiy',
    password: 'af1UtbqGHaU4'
});


new Promise((resolve, reject) => {
    client.on('connect', () => {
        resolve()
    })
}).then(() => {
    client.publish('myhome/kitchen/fridge/temp', JSON.stringify({ value: '21C' }));
}).catch((error)=> {
    console.log(error);
})
