const express = require('express');
const logger = require("../middlewares/request-logger");
const createGameRouter = require('./game/start')


const createApp = () => {
    const app = express();
    const gameRouter = createGameRouter();
    app.use(logger);
    app.use('/game', gameRouter);
    return app;
}

module.exports = { createApp };