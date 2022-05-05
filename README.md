# Express-React Boiler

ExpressJS app that serves `create-react-app` dev-server (with API proxy) for development, or serves the built/static `create-react-app` for staging/production.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. Open [http://localhost:5000/api](http://localhost:5000) to directly interface with the API server, however all fetch requests from the React app will hit this API port by proxy.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn start`

Builds the app for production to the `build` folder, then serves it staticly from the API server for staging.\
It correctly bundles React in production mode and optimizes the build for the best performance.\
Because all API requests will now hit the Express app directly and not by proxy, no front-end request pathing need be altered.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
