const express = require('express');
const cors = require('cors');

const logger = require("../middlewares/request-logger");
const createGameRouter = require('./game/start')


const createApp = (lobbyRouter, gameRouter, context) => {
    app.context = context;
    const app = express();
    app.use(logger);
    app.use(cors);
    app.use(express.json());

    app.use('/game', gameRouter);
    return app;
}

module.exports = { createApp };