const express = require('express');
const router = express.Router();
const MapTemplateCopy = require('../models/Map');

router.post('/datapush', async (req, res) => {
    try {
        const data = req.body.data;



        const result = await MapTemplateCopy.updateOne(
            { name: 'map'},
            {
              $set: {
                data: data
              }
            }
          );

        if (result.nModified === 0)
        {
            const map = new MapTemplateCopy({
                data: data,
                name: 'map',
            })
    
    
    
            await map.save();
            return res.json({msg: 'succeeded!'});          
        }

        return res.json({msg: 'succeeded!'});          


    } catch (err) {
        return res.status(500).json({msg: "Server Error..."});
    }
});


router.get('/datapull', async (req, res) => {
    try {
        let collections = await MapTemplateCopy.find({})
        if (collections.length === 0)
            return res.status(500).json({msg: "Server Error..."});
        else
            res.json( collections );
      } catch (err) {
        return res.status(500).json({msg: "Server Error..."});
      }
});

module.exports = router;