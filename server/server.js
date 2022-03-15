const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
// const api = require('../server/routes/api');
// const userApi = require('../server/routes/user');
// const deptoApi = require('../server/routes/departamento');
// const deptoUsers = require('../server/routes/usuarioDepartamento');

const app = express();

// Parsers for POST data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Point static path to dist
app.use(express.static(path.join(__dirname + '../dist/kroton.totem')));

// Set our api routes
// app.use('/api', api);
// app.use(userApi);
// app.use(deptoApi);
// app.use(deptoUsers);


// Catch all other routes and return the index file
app.get('/', (req, res) => {
    console.log(path.join(__dirname, '/dist/kroton.totem/index.html'))
    //res.sendFile(path.join(__dirname, '/dist/kroton.totem/index.html'));
    res.sendFile('/home/aldo/Downloads/unearsa-totem-web-frontend-7e56ac99add3/dist/kroton.totem/index.html');
    ///home/aldo/Downloads/unearsa-totem-web-frontend-7e56ac99add3/server/dist/kroton.totem/index.html

});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});



/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));



