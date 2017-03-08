#MLB AM

requires a .env file with PORT variable

ex:

```
PORT=3000
```

##Getting Started
1) Clone the repository:
- git clone https://github.com/mickberber/node-api.git
2) Check out the 'mlbam-redux' branch:
- git co mlbam-redux
3) Install dependencies:
- npm install

There are two Webpack configurations in this repository, one for production builds and one for developing with React Hot Module Replacement

##Developing
- npm run dev
This will start the Webpack dev server at http://localhost:8080/

##Building for production
- npm run build
This script has a prebuild script that runs before it, that will remove any old build file still in the directory(see package.json ln 9).

##To serve build files locally:
After completing the build process:
- npm run build-server
Instead of running a traditional node process, this is utilizing nodemon to refire the server incase it crashes during development.
Navigate to http://localhost:3000/, (dependent on the PORT variable in your .env file)

##Deployment(For Heroku)
Login with your heroku credentials & create a new application
- git remote add heroku https://git.heroku.com/mlbamchallenge.git
- heroku git push mlbam-redux:master
This will push the repository to Heroku and it will begin serving at the address you choose when registering your application.

##TODO:
- Add testing for things like:
  - Redux actions
  - AJAX calls
  - Component rendering
- Add date picking capability:
  - Allow for user to check out games from Previous and Next days
- Add extra styling
  - Include extra assets and functionality for adding MLB team logos to DetailScreen
