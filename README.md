
🔄 Palindrome Checker






<img width="1393" height="758" alt="Screenshot 2026-10-06 at 7 58 08 AM" src="https://github.com/user-attachments/assets/f4d41cc3-1f8b-4708-83b3-817fb20470c2" />
Description

The Palindrome Checker is a simple web application that allows a user to enter a word and find out whether or not it is a palindrome.

A palindrome is a word that reads the same forward and backward.

For example:

racecar → Palindrome ✅

hello → Not a Palindrome ❌

💻 How the App Works

The user enters a word into the input box.

The user clicks the button to check the word.

JavaScript sends the word to the Node.js server using fetch().

The server reverses the word.

The server compares the original word to the reversed word.

The server sends the result back as JSON.

The result is displayed on the webpage.

🛠️ Tech Stack

HTML

Creates the structure of the application, including the input, button, and result area.

CSS

Styles the application and controls the appearance of the webpage.

JavaScript

Handles user input, the button click, the fetch() request, and displaying the result.

Node.js

Creates the server that receives the user's word, checks whether it is a palindrome, and sends the result back to the browser.

🧠 Skills Practiced

JavaScript functions

Event listeners

DOM manipulation

fetch()

Query parameters

.split()

.reverse()

.join()

Conditional statements

JSON

Basic Node.js server development

Frontend and backend communication

💻 Local Setup

1. Clone the repository

Clone this project to your computer:

git clone YOUR-REPOSITORY-LINK

2. Open the project folder

cd YOUR-PROJECT-FOLDER

3. Install dependencies

npm install

If the project uses figlet and it is not already installed, run:

npm install figlet

4. Start the server

node server.js

5. Open the application

Open your browser and go to:

http://localhost:8000

Enter a word and click the button to see if it is a palindrome.

🎯 Goal

