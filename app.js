// server.js
// where your node app starts

// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
// const express = require("express");
// const app = express();
var router = require('/api/cnzzstat.js');
// app.use(express.static("public"));
app.get("/", (request, response) => {
    return response.sendFile("/index.html");
});
app.get("/dreams", (request, response) => {
    let dreams = {code:1,msg:"kiss your vagina"};
    return response.json(dreams);
});
// listen for requests 
const listener = app.listen(process.env.PORT||80, () => {
    console.log("Your app is listening on port " + listener.address().port);
});