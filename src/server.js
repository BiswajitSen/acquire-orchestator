const {PORT} = require('../.env.local.js')
const {createApp} = require("./routes/app");
const createGameRouter = require("./routes/game/start");

const main = () => {
    const port =  PORT || 9000;
    const lobbyRouter = createLobbyRouter();
    const gameRouter = createGameRouter();

    const app = createApp(port, lobbyRouter, gameRouter, context);
    app.listen(port, () => console.log("listening to port", port));
}

main()