const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {

  const conn = net.createConnection({
    host: IP, // IP address here,
    //localhost because im connecting to myself
    port: PORT, // PORT number here,
    //matching the port of the snek-multiplayer server
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });
  conn.on("connect", () => {
    conn.write("Name: CAH");
  });
  //  setInterval( () => {
  //     conn.write("Move: up");
  //   }, 1000);
  
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };
