const express = require('express');

const server = express();

const carsrouter = require("./carsrouter");

server.use(express.json());

server.use("/api/cars", carsrouter);

const port = 4000;

server.listen(port, () => {
	console.log(`\n* Server Running on http://localhost:${port} *\n`);
});