const {writeFile} = request('fs')

writeFile('File-Name.txt', 'File-Data', null, (err)=>{
    if(err){
        console.error('error => ', err);
        return;
    }
    console.log('Wirte file completed');
})