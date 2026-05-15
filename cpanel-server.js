const { server } = require("./server");

const port = Number(process.env.PORT || process.env.NODE_PORT || process.env.PASSENGER_PORT || 4176);
const host = process.env.HOST || "0.0.0.0";

server.listen(port, host, () => {
  console.log(`Flowpost Studio cPanel app running on ${host}:${port}`);
});
