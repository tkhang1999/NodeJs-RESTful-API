const express = require('express');
const http = require('http');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter.js');
const promotionsRouter = require('./routes/promotionRouter.js');
const leaderRouter = require('./routes/leaderRouter.js');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

// Handle requests to endpoints '/dishes' and '/dishes/:dishId'
app.use('/dishes', dishRouter);
// Handle requests to endpoints '/promotions' and '/promotions/:promotionId'
app.use('/promotions', promotionsRouter);
// Handle requests to endpoints '/leaders' and '/leaders/:leaderId'
app.use('/leaders', leaderRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});