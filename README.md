# 3REE Boilerplate

A React, Redux, RethinkDB, Express, boilerplate with Socket.io, Webpack, React Router, and React Flexbox Grid. The Webpack Dev Server also has CSS hot reloading enabled.

This app functions as a simple todo list with real-time functionality. Any changes to the rethinkdb table holding the todo list information will update the redux state of the application without requiring a reload.

Made with the help of ejecting a [create-react-app](https://github.com/facebookincubator/create-react-app).

## Dependencies

Requires a rethinkdb server, defaulting to environment variables of `DB_HOST=localhost` and `DB_PORT=28015`, which you may feel free to set manually.

## Usage

After cloning this package and with your rethinkdb instance up, run the following:

```
# install dependencies
> npm install

# setup rethinkdb database and table
> npm run setup

# start the dev server
> npm start
```

The app will automatically open a new tab in Google Chrome at [http://localhost:3000/](http://localhost:3000/) where the app is running. If you did not do `npm run setup`, the server will automatically check if the proper database and table exist and, if not, create them.

## Production build

To build this app into a static, minified package, running `npm run build` will create such a package under the `/build/` directory and run the production server at [http://localhost:9000/](http://localhost:9000/).
