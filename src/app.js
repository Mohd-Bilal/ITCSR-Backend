var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const session = require('express-session')
const key = require('./config/api.json')
var app = express();
app.use(cors({
    origin: ['http://localhost:8080','http://192.168.1.12:8080'],
    credentials: true
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ 
    name: 'accessToken',
    keys: [key.COOKIE_KEY],
    secret: key.COOKIE_KEY,
    cookie: {
        secure: false,
        httpOnly: true,
        path: '/',
        expires: '2h'
    }
}))

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
