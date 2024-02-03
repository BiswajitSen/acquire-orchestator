const {Router} = require('express');

const start = (req, res) => {
    console.log("start requested");
        res.send(200);
}

const createGameRouter = () => {
    const router = new Router();
    router.get('/start', start)

    return router;
}

module.exports = createGameRouter;