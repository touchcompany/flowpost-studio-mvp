const http = require("http");
const { server } = require("./server");

const port = Number(process.env.PORT || process.env.NODE_PORT || process.env.PASSENGER_PORT || 4176);
const host = process.env.HOST || "0.0.0.0";

const apiServer = http.createServer((req, res) => {
  if (req.url && !req.url.startsWith("/api/")) {
    req.url = `/api${req.url.startsWith("/") ? req.url : `/${req.url}`}`;
  }

  server.emit("request", req, res);
});

apiServer.listen(port, host, () => {
  console.log(`Flowpost Studio API cPanel app running on ${host}:${port}`);
});
