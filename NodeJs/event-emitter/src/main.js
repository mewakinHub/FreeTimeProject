import { eventEmitter } from './event';

import {emitData} from './publish';

async function main() {
    eventEmitter.on('Mr.A', (dataarg1, arg2) => {
        console.log('Mr.A data => ', dataarg1, arg2);
        console.log('2nd data => ', arg2);
        // event subscriber model

        eventEmitter.emit('Mr.B', "send data that Mr.A got to Mr.B: " + arg2);
        // event publisher model
    });
    eventEmitter.on('Mr.B', (data) => {
        console.log('Mr.B data => ', data);
    })
    await emitData(); //publish fn. exported in publish.js


    function myListener() {
        console.log('Listener triggered');
      }
      
    // Add the listener
    eventEmitter.on('myEvent', myListener);

    // Emit the event
    eventEmitter.emit('myEvent'); // Listener triggered

    // Remove the listener
    eventEmitter.off('myEvent', myListener);

    // Emit the event again
    eventEmitter.emit('myEvent'); // No output, as the listener has been removed
}

main();

// - You define event listeners using the .on method. When the event named 'Mr.A' is emitted, it will trigger the callback function with the provided data arguments.
// - Inside the 'Mr.A' listener, you log some data and then emit another event, 'Mr.B', with additional data.