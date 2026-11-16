

// PALINDROME CHECKER
// User enters a word or phrase.
// The word is sent to the server.
// The server reverses the word.
// The server checks if the word is a palindrome.
// The result is sent back to the webpage.

// IMPORT MODULES
const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
const figlet = require('figlet')

// CREATE SERVER
const server = http.createServer(function (req, res) {

    // Get the URL path
    const page = url.parse(req.url).pathname

    // Get information from the URL
    const params = querystring.parse(url.parse(req.url).query)

    console.log(page)

    // HOME PAGE
    if (page == '/') {

        fs.readFile('index.html', function (err, data) {

            if (err) {
                res.writeHead(404)
                res.end('HTML file not found')
                return
            }

            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(data)

        })

    }

    // PALINDROME API
    else if (page == '/api') {

        // Get the word entered by the user
        let word = params['word']

        // Check if the user entered a word
        if (!word || typeof word !== 'string' || word.trim() === '') {

            const objToJson = {
                message: 'PLEASE ENTER A WORD'
            }

            res.writeHead(400, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(objToJson))
            return
        }

        // Reverse the word
        let reversedWord = word.split("").reverse().join("")

        // Check if the word is a palindrome
        if (word == reversedWord) {

            const objToJson = {
                message: 'THIS IS A PALINDROME'
            }

            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(objToJson))

        } else {

            const objToJson = {
                message: 'THIS IS NOT A PALINDROME'
            }

            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(objToJson))

        }

    }

    // CSS FILE
    else if (page == '/style.css') {

        fs.readFile('style.css', function (err, data) {

            if (err) {
                res.writeHead(404)
                res.end('CSS file not found')
                return
            }

            res.writeHead(200, { 'Content-Type': 'text/css' })
            res.end(data)

        })

    }

    // BACKGROUND IMAGE
    else if (page == '/sabina-music-rich-OJy0JHnoUZQ-unsplash.jpg') {

        fs.readFile('sabina-music-rich-OJy0JHnoUZQ-unsplash.jpg', function (err, data) {

            if (err) {
                res.writeHead(404)
                res.end('Image not found')
                return
            }

            res.writeHead(200, { 'Content-Type': 'image/jpeg' })
            res.end(data)

        })

    }

    // JAVASCRIPT FILE
    else if (page == '/main.js') {

        fs.readFile('main.js', function (err, data) {

            if (err) {
                res.writeHead(404)
                res.end('JavaScript file not found')
                return
            }

            res.writeHead(200, { 'Content-Type': 'text/javascript' })
            res.end(data)

        })

    }

    // 404 PAGE
    else {

        figlet('404!!', function (err, data) {

            if (err) {
                console.log('Something went wrong...')
                res.writeHead(500)
                res.end('Server error')
                return
            }

            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.end(data)

        })

    }

})

// SERVER PORT
const PORT = process.env.PORT || 8000

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Palindrome server running on port ${PORT}`)
})
