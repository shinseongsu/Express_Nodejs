const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');
const bodyParser = require('body-parser');  //express 내장 모듈

const admin = require('./routes/admin');

const app = express();
const port = 3000;

nunjucks.configure('template', {
    autoescape: true,
    express: app
});

// 미들웨어 셋팅
app.use( logger('dev') );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: false }) );

app.get('/', (req, res) => {
    res.send('hello express');
});

function vipMiddleware(req, res, next) {
    console.log('최우선 미들웨어');
    next();
}

app.use( '/admin', vipMiddleware, admin );

app.listen(port, () => {
    console.log('Express listening on port', port);
});