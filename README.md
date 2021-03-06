#MLB AM

requires a .env file with PORT variable

ex:

```
PORT=3000
```

##Getting Started
1) Clone the repository:
- ```git clone https://github.com/mickberber/node-api.git```
2) Install dependencies:
- ```npm install```

There are two Webpack configurations in this repository, one for production builds and one for developing with React Hot Module Replacement

##Developing
- ```npm run dev```
This will start the Webpack dev server at http://localhost:8080/

##Building for production
- ```npm run build```
This script has a prebuild script that runs before it, that will remove any old build file still in the directory(see package.json ln 9).

##To serve build files locally:
After completing the build process:
- ```npm run build-server```
Instead of running a traditional node process, this is utilizing nodemon to refire the server incase it crashes during development.
Navigate to http://localhost:3000/, (dependent on the PORT variable in your .env file)

##TODO:
- Add testing for things like:
  - Redux actions
  - AJAX calls
  - Component rendering
- Add date picking capability:
  - Allow for user to check out games from Previous and Next days
- Add extra styling
  - Include extra assets and functionality for adding MLB team logos to DetailScreen
