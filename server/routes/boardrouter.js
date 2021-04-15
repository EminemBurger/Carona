const express = require('express');
const router = express.Router()
const boardTemplateCopy = require('../models/board')
const signUpTemplateCopy = require('../models/SignUpModels')



router.post("/:board", async (req, res) => {
    try {
        var Id = require('mongodb').ObjectID; 

        const writer = req.body._id;
        const title = req.body.title;
        const content = req.body.content;      

        let o_id = new Id(writer);

        let willdo = await signUpTemplateCopy.findById(o_id)


        const board = new boardTemplateCopy({
            writer: writer,
            username: willdo.username,
            title: title,
            content: content
        })

        await board.save();

        res.json({ message: "게시글이 업로드 되었습니다." });
    } catch (err) {
      console.log(err);
      res.json({ message: false });
    }
  });


  router.get("/:board", async (req, res) => {
    try {
      let collections = await boardTemplateCopy.find({})
      res.json( collections );
    } catch (err) {
      console.log(err);
      res.json({ message: false });
    }
  });

  router.put("/:board", async (req, res) => {
    try {
      const _id = req.body._id;
      const title = req.body.updatetitle;
      const content = req.body.updatecontent;  


    var Id = require('mongodb').ObjectID; 
    let o_id = new Id(_id);


   

      await boardTemplateCopy.updateOne(
        { writer: o_id, title: title},
        {
          $set: {
            title: title,
            content: content
          }
        }
      );
      res.json({ message: "게시글이 수정 되었습니다." });
    } catch (err) {
      console.log(err);
      res.json({ message: false });
    }
  });


  router.delete("/:board", async (req, res) => {
    try {
      const username = req.body.username;
      const title = req.body.title;
      const content = req.body.content;


      await boardTemplateCopy.deleteOne({
        "username": username,
        "title": title,
        "content": content
      });
      res.json({ message: true });
    } catch (err) {
      console.log(err);
      res.json({ message: false });
    }
  });
  

module.exports = router;