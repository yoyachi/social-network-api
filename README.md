# social-network-api

This is an API for a social network web application, where users can share their thoughts, react to friends thoughts, and create a friend list. This application uses Express.js for routing, a MongoDB database, and the Mongoose ODM. This application also uses dateFormat.js which is a javaScript date library to format timestamps.

## Installation

* Please clone GitHub repository
* npm init
* Install MongoDb and Express in your computer
* Invoke application using npm start.

## Technologies

* Express.js
* JavaScript
* MongoDB
* Mongoose
* Node.js
* dateFormat.js
* Insomnia

## Walkthrough video URL

In this walkthough video, I demostrate functionality of application inteacting with CRUD operations.  Once I enter the command npm start to invoke application, my server is started and the Mongoose models are synced to the MongoDB database.  Then I open API GET routes in Insomnia Core for "users" and "thoughts". The database for each o these routes is displayed in a formatted JSON.  Then, I test API POST, PUT, and DELETE routes in Insomnia Core, and I am able to successfully create and delete reactions to thoughts and add and remove friends to a user's friend list.
