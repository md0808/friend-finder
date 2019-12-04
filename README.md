# Friend Finder :wink:	
https://friend-finder-md0808.herokuapp.com/

Full stack application where people are matched based on the data they submit through a survey they fill out.

## Technologies used

 * Javascript
 * HTML/CSS
 * Bootstrap
 * AJAX
 * Node.js
 * Express.js
 * NPM
 * Heroku
 
 ## Project Summary
 
 This project mimics some of the functionality and purpose of a dating application. The application is composed of three routes built with express. Two of the routes take the end user to html pages (the homepage and the survey). The other route accesses an API of JSON objects containing information about people who the user could possibly match with, and where the user's data will be logged after completing the survey.
 
 The survey contains a number of questions about the user in which they scale their aggreement or association with the content somewhere between 1-5. Upon submission, the answers from the user along with their name and photo are reformatted as JSON, and the answers to each question are compared to the answers of every other user to find the best possible match. The best match is then returned to the frontend, so the user can see a picture and the name of their new BFF.
 
 ## Visual Documentation
 
 <img width="510" alt="Screen Shot 2019-12-03 at 9 28 32 PM" src="https://user-images.githubusercontent.com/51139840/70153313-5ec1d480-1674-11ea-849c-00598b84fc80.png">

 
 <img width="771" alt="Screen Shot 2019-12-03 at 9 30 46 PM" src="https://user-images.githubusercontent.com/51139840/70153246-40f46f80-1674-11ea-8e67-d887a5c0358e.png">
 
 
