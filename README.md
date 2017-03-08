#NODE-API

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

##To serve locally:
After completing the build process:
- npm run build-server
Instead of running a traditional node process, this is utilizing nodemon to refire the server incase it crashes during development.

##Deployment
