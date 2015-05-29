Running locally:

1. First install rails with this url -> http://railsapps.github.io/installrubyonrails-mac.html
2. Register with twitter and instagram to get your own api keys
3. Add an auth.json to root directory with your twitter and instagram api tokens in this format shown below: 
   Note: An auth.json file will be supplied to the TA in the zipped project files
{
	"twitter_consumer_key": "YOUR_CONSUMER_KEY",
  "twitter_consumer_secret": "YOUR_CONSUMER_SECRET",
  "twitter_access_token": "YOUR_ACCESS_TOKEN",
  "twitter_access_token_secret": "YOUR_ACCESS_TOKEN_SECRET",
  "instagram_auth": "YOUR_INSTAGRAM_AUTH_TOKEN"
}
4. Run "bundle install" to install the project dependencies
5. Run “rails s” to start the local development server
6. Open a web browser and go to http://localhost:3000
7. The application is up and running locally 

Running on a server:

1. Create an account on heroku.com 
2. Create an  application on heroku.com
3. Fork this repository -> https://github.com/spencerprescott/vistasearch.git
4. Go to the deploy tab in heroku under your application 
5. Click connect to GitHub
6. Sign in with your GitHub account 
7. Connect the repository you had just forked
9. Add enviroment variables shown below for your auth information. Set the variables to the same values in the auth.json file
- twitter_consumer_key
- twitter_consumer_secret
- twitter_access_token
- twitter_access_token_secret
- instagram_auth 
9. Click deploy
10. Now your application is up and running.

Testing:

  Backend:
    Note: Be sure to have run the "bundle install" command before continuing
  - Run the command "rspec" in the commandline. The tests will appear in the terminal window
  
  Frontend:
  1. Run the application locally (Refer to the Running Locally instruction)
  2. Navigate to http://localhost:3000/test
  3. Click the blue "Run Frontend Tests" button
  4. The test results will appear on screen
  

How to use:

1. In the search box type in what you want topic you want to search 
2. Click the filter button to decide whether you want Twitter, Instagram, etc
3. Press enter or click the magnifying glass 
4. View results

Bugs:
1. When I chose instgram only, pictures could not be loaded.
2. After switching between different filters, it stopped working.
3. We should also highlight which filter is currently being used
4. It would be much better to refresh the result when a filter is set

Viewing the site:
http://vistasearch.herokuapp.com/
