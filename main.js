//user inputs a word  or phrase
//that phrase is sent to the server
// the server  does something to check to see if its a palindrome/ same word backwards
// if the word is a palindrome then a message is displaysed 
//  if the word is not a palindrome a message is didsplayed 
//user can clear input and start again

document.querySelector('#inputbutton').addEventListener('click', palindromeBTN)
function palindromeBTN() {
    let wordEntered = document.querySelector('input').value

    fetch(`/api?word=${wordEntered}`)//word is just a name im calling data in the url  
        .then(res => res.json())// after fetch is done res= the response res.json= turns that response inti json
        .then(data => {
            document.querySelector('h2').innerText = data.message
        })// recives info from server.js
}




