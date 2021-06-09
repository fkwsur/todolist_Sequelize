const express = require('express');
const app = express();
const cors = require('cors');
const Router = require('./routes');
const model = require('./models')
const db = require('./models')   // mysql 시퀄라이저 모델
var http = require('http');
http.createServer(app).listen(8080, () => {
  console.log('server on');
});

db.sequelize
.authenticate()
.then(async () => {
    console.log('db connect ok');
    await db.sequelize.sync({force : false});
})
.catch(err => {
    console.log('db' + err);
});

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/', Router.TodoRouter)


