
const fs = require('fs');


// artblocks
let artifactUrl = 'https://generator.artblocks.io/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/';
let tokenId = 281000000;

let allData = [];

async function start() {

    for (let i = 0; i < 426; i++) {
        let nowTokenId = tokenId + i;
        let fullUrl = `${artifactUrl}${nowTokenId}`;

        let result = await fetch(fullUrl);
        let resultText = await result.text();

        console.log(`Fetch Token: ${nowTokenId}`);
        console.log(`Fetch Url: ${fullUrl}`);
        // console.log(resultText);

        // regex to find the data within "hash:"
        let regex = /"hash":"(.*?)"/;
        let hash = resultText.match(regex)[1];

        console.log(`hash: ${hash}`);

        allData[i] = hash;
    }

    fs.writeFileSync('token-hash-data.json', JSON.stringify(allData));
}

start();