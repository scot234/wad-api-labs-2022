import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;
// Configure our HTTP server to respond with Hello World to all requests.
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello  WASD2');
});

server.listen(port);

// Put a friendly message on the terminal
console.log(`Server running at ${port}`);





