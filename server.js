//user inputs a word  or phrase
//that phrase is sent to the server
// the server  does something to check to see if its a palindrome/ same word backwards
// if the word is a palindrome then a message is displaysed 
//  if the word is not a palindrome a message is didsplayed 
//user can clear input and start again

//params['word'].split("")// this breaks the word apart letter by letter into an array from being a string, no space
//params['word'].split("").reverse()//reverse order of letters in the array after split
//params['word'].split("").reverse().join("")// brings the letters back together and turn it back into a string(the word is still backwards)


const http = require('http');// allows webpage and server communicare data its how we send r
const fs = require('fs')// file sysytem
const url = require('url');
const querystring = require('querystring');//info in the url
const figlet = require('figlet')// a package

const server = http.createServer(function (req, res) { //create a server and stores it in veriable server
    const page = url.parse(req.url).pathname;// this is the url path stores in page variable
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page);


    if (page == '/') {// means if page = homepage run this function
        fs.readFile('index.html', function (err, data) {//fs reads the html file
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);// senst html to browser
            res.end();
        });
    }




    else if (page == '/api') { //main.js sends a request to /api run this

        let reversedWord = params['word'].split("").reverse().join("")
        //params['word'].split("")// this breaks the word apart letter by letter into an array from being a string, no space
        //params['word'].split("").reverse()//reverse order of letters in the array after split
        //params['word'].split("").reverse().join("")// brings the letters back together and turn it back into a string(the word is still backwards)

        if (params['word'] == reversedWord) {
            const objToJson = {
                message: 'THIS IS A PALINDROME'
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(objToJson))// takes the object turns it into something readable for JSON and sends response to main.js thats where tge fetch request is happening
        }


        else {
            const objToJson = {
                message: 'THIS IS NOT A PALINDROME'
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(objToJson))
        }
    }

    else if (page == '/style.css') {
        fs.readFile('style.css', function (err, data) {
            res.write(data);
            res.end();
        });
    }

    else if (page == '/main.js') {
        fs.readFile('main.js', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.write(data);
            res.end();
        });
    }
    else {
        figlet('404!!', function (err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            res.write(data);
            res.end();
        });
    }
});
server.listen(8000) //starts the server and listen for rewuests
