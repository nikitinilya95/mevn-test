import express from 'express'
import Post from '../../models/post.model'

const router = express.Router();

router.route('/')
    .get(async (req, res) => {
      res.json(await Post.find({}));
    })
    .post(async  (req, res) => {
      let post = new Post({
        text: req.body.text
      });
      await post.save();
      res.status(201).send();
    });

router.route('/:id')
    .get(async (req, res) => {
      res.json(await Post.findById(req.params.id));
    })
    .delete(async (req, res) => {
      await Post.deleteOne({_id: req.params.id});
      res.status(200).send();
    });

module.exports = router;