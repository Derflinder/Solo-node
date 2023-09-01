import http from 'http';
import chalk from 'chalk';

const host = 'localhost';
const port = 8000; // o 8080

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const responseJSON = JSON.stringify({ nombre: 'Alex Peña', mensaje: '¡Hola desde el servidor!' });
  res.end(responseJSON);
});

server.listen(port, host, () => {
  const message = `Servidor escuchando en ${chalk.green(`${host}:${port}`)}`;
  console.log(message);
});
