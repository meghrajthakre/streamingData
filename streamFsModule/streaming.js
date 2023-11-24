const fs = require('fs');

// fs.writeFile('streamingData.txt', 'this is a chunk of data to streaming ', (err, data) => {
//     console.log("successfully wrote the file and created streaming file ")

// })

// streaming is done asynchronously 
// most common event are us in streaming is data , end , error , finish

// data = fired when data is available for reading/writing

// end = fired when no more data to read 

// error = fired when some error occurs while reading / writing

// finish = fired when no more data is available

var readerStream = fs.createReadStream('streamingData.txt');

readerStream.setEncoding('utf8');

readerStream.on('data', (chunks) => {
    console.log(chunks);
})

readerStream.on('end', (chunks) => {
    console.log("succefuly finished");
})

console.log('live streaming is available');