const {PORT} = require('../.env.local.js')
const {createApp} = require("./routes/app");

const main = () => {
    const port =  PORT || 9000;
    const app = createApp(port);
    app.listen(port, () => console.log("listening to port", port));
}

main()