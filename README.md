# Back

First We will setup the backend.

## Getting started

### enviroment
You can set two enviroment variables in ```.env``` file with values:
- STABILITY_TOKEN: the token than we use for stability api.
- PORT: port where application will listen. default : 3000


### install and run
```
    cd backend
    npm install
    npm run dev
```
Starts on `http://localhost:[port]`.


## Project structure

`resources/*` 
In this folder are our external integrations.

`controllers/*` 
the entry point of our app after validations, where we call services(database calls) and resources(external integrations) and return a response.

`validations/validationName.ts` 
where we set our schema validations using joi.


`types/newType.ts` 
the types are representations data than we use.

`config` 
App configuration.

`utils/*` 
Useful snippets of code like schema validations, database connection, errors handler, etc.


# Front

Setup of our front app.

## Getting started

### enviroment
You can set one enviroment variables in ```.env``` file with values:
- BASE_URL: the URL of our API.


### install and run
```
    cd backend
    npm install
    npm run dev
```
Starts on `http://localhost:3000`.




_ All Tested using NPM 8.19.4, Node v16.20.2.