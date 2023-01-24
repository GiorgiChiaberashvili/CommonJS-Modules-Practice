const helloMessage = require('./hello-message').helloMessage;


function sayMessage(message) {
  console.log(`"${message}"`)
}

sayMessage(helloMessage);


module.exports.sayMessage = sayMessage;
