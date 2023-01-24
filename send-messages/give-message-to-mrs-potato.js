const sayHelloTo = require('./say-hello-to').sayHelloTo;

function giveMessageToMrsPotato(message) {
  sayHelloTo("Mrs. Potato");
  console.log(`(Psst... ${message})`)
}

giveMessageToMrsPotato("Hi Buzz");

module.exports.giveMessageToMrsPotato = giveMessageToMrsPotato;
