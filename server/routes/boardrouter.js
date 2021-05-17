const express = require('express');
const router = express.Router()
const boardTemplateCopy = require('../models/board')
const auth = require('../middleware/auth');
const signUpTemplateCopy = require('../models/SignUpModels')



router.post("/:board", auth, async (req, res) => {
    try {
              const user = await signUpTemplateCopy.findById(req.user.id).select('-password');

              const title = req.body.title;
              const content = req.body.content;  

              const board = new boardTemplateCopy({
                writer: user.id,
                username: user.username,
                title: title,
                content: content
            })
    
            await board.save();
    
            res.json({ message: "게시글이 업로드 되었습니다." });

          } catch (err) {
            console.log(err);
            res.json({ message: false });
          }
        }
);



  router.get("/:board", async (req, res) => {
    try {
      let collections = await boardTemplateCopy.find({})
      res.json( collections );
    } catch (err) {
      console.log(err);
      res.json({ message: false });
    }
  });

  router.put("/:board", auth, async (req, res) => {
    try {

      const user = await signUpTemplateCopy.findById(req.user.id).select('-password');
      const title = req.body.updatetitle;
      const content = req.body.updatecontent;  
      const createdAt = req.body.createdAt;


      const result = await boardTemplateCopy.updateOne(
        { writer: user.id , createdAt: createdAt},
        {
          $set: {
            title: title,
            content: content
          }
        }
      );

      if (result.nModified === 0)
      {
        return res.status(500).json({ msg: "Server Error..."});
      }
      res.json({ message: "게시글이 수정 되었습니다." });
    } catch (err) {
      console.log(err);
      res.json({ message: false });
    }
  });


  router.delete("/:board", auth,  async (req, res) => {
    try {
      const user = await signUpTemplateCopy.findById(req.user.id).select('-password');

      const username = user.username;
      const title = req.body.title;
      const content = req.body.content;
      const createdAt = req.body.createdAt;


      const result = await boardTemplateCopy.deleteOne({
        "username": username,
        "title": title,
        "content": content,
        "createdAt": createdAt,
      });

      if (result.deletedCount === 0)
      {
        return res.status(500).json({ msg: "Server Error..."});
      }

      res.json({ message: true });
    } catch (err) {
      console.log(err);
      res.json({ message: false });
    }
  });
  

module.exports = router;