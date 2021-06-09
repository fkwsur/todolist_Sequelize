const {  SqTodoList } = require('../models');

module.exports = {

  Create : async (req,res) => {
    try{
      let {content} = req.body;
      const rows = await SqTodoList.create({
      content : content
      });
      if (rows) return res.status(200).json({result : rows});
      else throw console.log(error);
    } catch(err){
      console.log(err);
    }
  },

  List : async (req,res) => {
    try{
      const rows = await SqTodoList.findAll();
      if (rows) return res.status(200).json({result : rows});
      else throw console.log(error);
    } catch(err){
      console.log(err);
    }
  },

  Update : async (req,res) => {
    try{
       let {idx, content} = req.body;
       const rows = await SqTodoList.update(
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
  },
  Delete : async (req,res) => {
    try{
      let {idx} = req.body;
      const rows = await SqTodoList.destroy({ where : {idx : idx} });
      if (rows) return res.status(200).json({result : rows});
      else throw console.log(error);
    } catch(err){
      console.log(err);
    }
  }
};
