const sayHelloTo = require('./send-messages/say-hello-to').sayHelloTo;
const giveMessageToMrsPotato = require('./send-messages/give-message-to-mrs-potato.js').giveMessageToMrsPotato;
const msg1 = require('./messages/index').message1;
const msg2 = require('./messages/index').message2;
const msg3 = require('./messages/index').message3;

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);
