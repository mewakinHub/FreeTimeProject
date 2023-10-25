import{createReadStream} from 'fs'

const readStream = createReadStream('filewritten.txt');

readStream.on('data', (data)=>{
    console.log('Data => ', data.toString());
})

// readStream.close();
readStream.on('finish', () => {
    console.log('Data has been read from filewritten.txt');
  });