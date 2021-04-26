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

https://drive.google.com/file/d/1MkjCdXLg7ABEqe9L9qJKuETd1m3sbCHW/view

In this walkthough video, I demostrate functionality of application inteacting with CRUD operations.  Once I enter the command npm start to invoke application, my server is started and the Mongoose models are synced to the MongoDB database.  Then I open API GET routes in Insomnia Core for "users" and "thoughts". The database for each o these routes is displayed in a formatted JSON.  Then, I test API POST, PUT, and DELETE routes in Insomnia Core, and I am able to successfully create and delete reactions to thoughts and add and remove friends to a user's friend list.

## Snapshot

![Screen Shot 2021-04-26 at 10 15 08 AM](https://user-images.githubusercontent.com/69886471/116107360-94f06180-a678-11eb-8f45-d9722106e089.png)

![Screen Shot 2021-04-26 at 10 15 31 AM](https://user-images.githubusercontent.com/69886471/116107382-9b7ed900-a678-11eb-9ea2-4fba6ebf5d23.png)

![Screen Shot 2021-04-26 at 10 16 02 AM](https://user-images.githubusercontent.com/69886471/116107407-a174ba00-a678-11eb-9da6-8a98e7c9a472.png)

## License

MIT license

