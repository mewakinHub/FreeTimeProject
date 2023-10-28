import {createReadStream, createWriteStream} from 'fs'
import { createGzip } from 'zlib' //build-in fn. to create file zip

const readMyProfileStream = createReadStream('profile.jpg');
const writeMyProfileStream = createWriteStream('profile-Compression.gz');

readMyProfileStream
    .pipe( //data transformation btw stream and stream
        createGzip({
            flush: 0, //clear pipe
        })
    )
    .pipe(writeMyProfileStream)
    // after get zip file, we need to change File to .jpg to open it!
    .on('finish', () => { //check whether finish or not?
    console.log('compressed finished!')
    readMyProfileStream.close();
});
