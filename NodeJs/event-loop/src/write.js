import {createWriteStream, write} from 'fs'
// fs is file system module{using for read/write file/directory, create folder, and etc.}
const writeStream = createWriteStream('filewritten.txt');

let count = 1;
let interval; // Declare the interval variable

// for(let count = 0; count <= 10; count++){
//     writeStream.write(`data-${count}\r\n`);
//     console.log('write => ', `data-${count}`);
// }
// writeStream.end();
// writeStream.on('finish', () => {
//     console.log('Data has been written to filewritten.txt');
//   });
  
/* setInterval keep log count until `ctrl c` but no write file(why?)
  creating the writable stream (writeStream) and immediately calling writeStream.end() before starting the setInterval. The writeStream.end() method effectively closes the stream for further writing, so any subsequent attempts to write to it will not work.*/
// use `ctrl c` to stop interval in terminal
interval = setInterval(() => {
    writeStream.write(`data-${count}\r\n`);
    console.log('write => ', `data-${count}`);
    count++; // Increment count for new data
}, 1000);

setTimeout(() => {
    writeStream.end();
    writeStream.on('finish', () => { 
        console.log('Data has been written to filewritten.txt');
    });

    clearInterval(interval); // Stop the interval
}, 11000); // End the stream after 11 seconds

/* While vs setInterval
Certainly, here's a revised summary with the main focus on the distinction between asynchronous file I/O and synchronous operations, along with an example:

1. **Asynchronous File I/O:** I've chosen to use `setInterval` for handling asynchronous file I/O operations. This approach is well-suited for tasks like writing data to a file at regular intervals without blocking the event loop.

2. **Non-Blocking Advantage:** The use of `setInterval` ensures that these file I/O operations don't block other asynchronous tasks, allowing them to proceed in parallel.

3. **Consideration for Synchronous Tasks:** If the scenario involved synchronous operations or required different looping conditions, a `while` loop might have been a more appropriate choice.

**Example:** Think of a situation where you need to periodically log system data to a file. Using `setInterval` in this case ensures uninterrupted system monitoring without hindering other processes.
*/

/* \r (Carriage Return) → moves the cursor to the beginning of the line without advancing to the next line
 \n (Line Feed) → moves the cursor down to the next line without returning to the beginning of the line — In a *nix environment \n moves to the beginning of the line.
 \r\n (End Of Line) → a combination of \r and \n */

// <br> is only html while \n is in js. <br> only works on content being appended to a webpage. Its the webpage that sees <br> as a new line. \n will be a new line if you console.log the string.
// `\r\n` is for Window system File