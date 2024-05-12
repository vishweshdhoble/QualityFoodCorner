# QFC
## Quality Food Corner for Quality People

QFC is a food-ordering website from which you can order food items of your choice. It is a semester-long project for full-stack development course offered by **IIIT Sri City** under supervision of **Dr. Subu Kandaswamy sir**. 

## Tech-Stacks

QFC uses a number of tech stacks to work properly:

- [ReactJS] - Front-end library to design web applications
- [NodeJS] - Backend for web applications
- [ExpressJS] - back end web application framework for Node.js
- [MongoDB] - Database to store infromation of users, food items, etc.

## Installation

QFC requires [Node.js](https://nodejs.org/) v12+ and [npm](https://www.npmjs.com/) v6+ to run.

### To run with provided zip file
First of all, extract the given zip file and navigate to the root folder containing client and server sub-folders.

Now install the dependencies and devDependencies to start the server.
```sh
cd server
npm install
npm run devStart
```

To start react app (client side environment), navigate again to root folder :

```sh
cd client
npm install
npm start
```

### To run through github
First of all, clone the repository using 
```sh
git clone https://github.com/giyasht/QualityFoodCorner.git
```
Now navigate to cloned repository and follow the same steps as given for zip file.

## Packages

QFC is currently extended with the following packages.

### Client-side npm packages
- axios
- react-router-dom
- dotenv
- mapbox-gl
- react
- react-dom
- react-elastic carousel
- react-loading-spin
- react-paginate
- react-pro-sidebar
- react-router-dom
- react-scripts
- styled-components
- sweetalert2
- sweetalert2-react-content
- web-vitals

### Server-side npm packages
- body-parser
- cookie-parser
- dotenv
- cors
- express
- express-jwt
- express-validator
- formidable
- jsonwebtoken
- lodash
- mongoose
- multer
- uuid (v4)
- node-geocoder

## To build react app

For production release (client side app):

```sh
npm run build
```

## Project Links
- Deployed react app (https://hopeful-mccarthy-367b57.netlify.app/)

