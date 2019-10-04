let express = require("express");
let path = require("path");

let app = express();

let PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//require("./app/routing/apiroutes")(app);
//require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})