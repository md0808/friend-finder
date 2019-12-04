const express = require("express");
const bodyParser = require("body-parser")
const app = express()

const PORT = process.env.PORT || 8888;

app.use(express.urlencoded({ extended: true }));
//-------------------------------------------------
app.use(express.json());

require("./app/routing/apiRoutes")(app);

require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("App is listening on Port " + PORT);
});