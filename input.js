let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === "w") {
    //w
    connection.write("Move: up");
  }

  if (key === "a") {
    //w
    connection.write("Move: left");
  }

  if (key === "s") {
    //w
    connection.write("Move: down");
  }

  if (key === "d") {
    //w
    connection.write("Move: right");
  }

  // connection.write("Move Up");

  // console.log(connection)

  // console.log("key", key);
  if (key === "\u0003") {
    process.exit();
  }
  //   if (key === "\u0087") {
  //     //w
  //     console.log("w");
  //   }
  //   if (key === "\u0065") {
  //     //a
  //     console.log("a");
  //   }
  //   if (key === "\u0068") {
  //     //d
  //     console.log("d");
  //   }
};
// stdin.on("data", (key) => {
//   if (key === "\u0087") {
//     //w
//     console.log("w");
//   }
// });
// stdin.on("data", (key) => {
//   if (key === "\u0065") {
//     //a
//     console.log("a");
//   }
// });
// stdin.on("data", (key) => {
//   if (key === "\u0083") {
//     console.log("s");
//     //s
//   }
// });
// stdin.on("data", (key) => {
//   if (key === "\u0068") {
//     //d
//     console.log("d");
//   }
// });

module.exports = { setupInput };
