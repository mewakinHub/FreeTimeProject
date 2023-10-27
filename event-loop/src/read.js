import { createReadStream } from 'fs';

const readStream = createReadStream('filewritten.txt');

readStream.on('data', (data) => {
  console.log('Data => ', data.toString());
});

readStream.on('end', () => { //after complete reading(finish is for writing)
  console.log('Data has been read from filewritten.txt');
});

// readStream.close(); // will automatically be closed when it reaches the end of the file or when an error occurs, unlike writeStream