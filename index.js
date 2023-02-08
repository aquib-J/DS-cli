require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const DataStructureApp = require("./Data-structures");

const app = express();
app.use(bodyParser.json());

let dsInstance = new DataStructureApp();

/**
 * HTTP Protocol to test logic
 *
 * {
 *      type:'stack' | 'queue'
 *      command:'create' | 'push' | 'pop' | 'print' | 'flush' | 'exit'
 *      value: number | string
 *
 * }
 */

app.post("/test", (req, res) => {
  const { type, command, value } = req.body;
  if ((type == "stack" || type == "queue") && command == "create")
    res.json({ response: dsInstance.create(type) });
  else if ((type == "stack" || type == "queue") && command == "push")
    res.json({ response: dsInstance.push(value) });
  else if ((type == "stack" || type == "queue") && command == "pop")
    res.json({ response: dsInstance.pop() });
  else if ((type == "stack" || type == "queue") && command == "print")
    res.json({ response: dsInstance.print() });
  else if ((type == "stack" || type == "queue") && command == "flush")
    res.json({ response: dsInstance.flush("print") });
  else if ((type == "stack" || type == "queue") && command == "exit") {
    res.json({ response: true });
    dsInstance.exit();
  }
});

app.listen(process.env.PORT, () =>
  console.log(`Successfully set up the Express App on port ${process.env.PORT}`)
);


