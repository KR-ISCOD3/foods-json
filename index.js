const jsonServer = require("json-server"); // require json-server
const server = jsonServer.create(); // create server json
const middleware = jsonServer.defaults(); // default middleware json-server
const route = jsonServer.router("./routes/db.json"); // default route to json-server
const {config} = require("dotenv");

// dotenv configuration
config();

// use middleware
server.use(middleware);
// use routes
server.use(route);

// declate port and hostname from .env
const port = process.env.PORT || 3002;
const host = process.env.HOSTNAME || "localhost";

server.listen(port,()=>{
    console.log(`Server is running on...\nhttp://${host}:${port}`);
});