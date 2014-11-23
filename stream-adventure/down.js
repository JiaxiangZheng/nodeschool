var fs = require('fs'),
    request = require('request');

function download(url, name) {
    request(url).pipe(fs.createWriteStream(name))
}
download('http://m2.music.126.net/IYTBEE3oxlp0vMc4QQK2ig==/6663040464423751.mp3', 'yanni.mp3')


