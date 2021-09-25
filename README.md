//What We will be building

We will be building web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. Using an exciting new api called meaningCloud, we can build a simple web interface to interact with their NLP system. This tool will give us back sentimental information about the article

Node and express will be the webserver and routing, and webpack will be our build tool of choice. Using webpack, we will set up the app to have development and production environments, each with their own set of tools and commands.

We will also use Jest to test our route and other JavaScript functions of our application

Run project
Below shows how to run in development and production mode.

run in development mode
To start the webpack dev server at port 8080

$ npm run build-dev

run in production mode
Generate the dist files and then start server at port 3000

$ npm run build-prod

$ npm run start

Configs
Here, we have two webpack config files for both development mode(webpack.config.dev.js) and production mode(webpack.config.prod.js )

We also have a package.json to manage dependencies

API
meaningcloud api which is: https://api.meaningcloud.com/sentiment-2.1

Offline Functionality
The project have service workers set up in webpack to provide the offline functionality of our app. When the service worker is functioning correctly, you will see the below message when you inspect the browser.



Testing
Testing is done with Jest. To run test, use the command

npm run test.



Interactions
Home page


It is a single page web app. It has a single form input field that accepts user input(URL), then runs a check to make sure it is a valid URL. If it is not a valid URLmessage an alert will be displayed.



If the URL is valid, an api call will be initiated and the result displayed on the web page as shown below;

API response


The page built for this project is a simple one. It has a form with a single filed which receives an input. This input is checked for valid url. An alert message is displayed for invalid url. If the url is valid, then an api call is performed and the result displayed on the page.

