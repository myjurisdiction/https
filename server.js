const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

const server = https.createServer(options);

server.on("request", (req, res) => {
  res.write(JSON.stringify({ status: "live" }));
  res.end();
});

server.listen(8080, console.log("Listening on port 8080"));
