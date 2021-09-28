const express = require('express');
const app = express();
const pool = require('./database');
const cors = require('cors');
const { todotable } = require('./model')
const db = require('./model')   // mysql 시퀄라이저 모델

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false}))


db.sequelize
.authenticate()
.then(async () => {
    console.log('db connect ok');
    await db.sequelize.sync({force : false});
})
.catch(err => {
    console.log('db' + err);
});
 
//익스프레스가 지원해주는 restAPI
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/create', async (req, res) => {
  try{
        let {content} = req.body;
        const rows = await todotable.create({
        content : content
        });
        if (rows) return res.status(200).json({result : rows});
        else throw console.log(error);
      } catch(err){
        console.log(err);
      }
});

app.get('/list', async (req, res) => {
  try{
    const rows = await todotable.findAll();
    if (rows) return res.status(200).json({result : rows});
    else throw console.log(error);
  } catch(err){
    console.log(err);
  }
});

app.post('/update', async (req, res) => {
  try{
    let {idx, content} = req.body;
    const rows = await todotable.update(
      {content: content},
     {
       where : {idx : idx}
     }
     );
     if (rows) return res.status(200).json({result : rows});
     else throw console.log(error);
 } catch(err){
   console.log(err);
 }
});
 
app.post('/delete', async (req, res) => {
  try{
    let {idx} = req.body;
    const rows = await todotable.destroy({ where : {idx : idx} });
    if (rows) return res.status(200).json({result : rows});
    else throw console.log(error);
  } catch(err){
    console.log(err);
  }
});

//app.listen으로 서버 실행이 가능해집니다.
app.listen(8080, () => {
  console.log('실행!!~');
})
