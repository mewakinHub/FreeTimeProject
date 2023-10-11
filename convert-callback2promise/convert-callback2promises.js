const {writeFile, writeFileSync} = require('fs');

// //This is Call Back HELL: function inside function
// writeFile('File-Name.txt', 'File-Data', null, (err)=>{
//     if(err){
//         console.error('error => ', err);
//         return;
//     }
//     console.log('Wirte file completed');
//     function add(a,b){
//          return a + b; }
// })

function writeFilePromise(){
    return new Promise((resolve,reject) =>{ //arrow function for return value
        writeFile('convert-callback2promise/File-Name.txt', 'Content-Data', null, (err)=>{
        if (err){ //err is parameter callback: if callback has error parameter
            reject(err); // reject = fail task(throw error away)
            return;
        }
        resolve('write file complete'); // resolve = complete task
        })
    })
}

function add(a,b){
    return a + b;
}

async function main(){ //await with async: wait for reject or resolve
    const writeFileResult = await writeFilePromise();
    console.log("Result => ", writeFileResult);

    console.log('Add Result => ', add(1,2));
}

main();
