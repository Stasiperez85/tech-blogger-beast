const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User } = require('../models');

router.get('/', (req, res) => {
    res.render('homepage', {
        id: 1,
        title: 'Handlebars Docs',
        content: "test",
        created_at: new Date(),
        user: {
            username: 'test_user'
        }
    });
});

// router.get('/', (req, res) => {
//     Post.findAll({
//         attributes: [
//             'id',
//             'content',
//             'title',
//             'created_at',
//             // [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
//         ],
//         include: [
//             {
//                 model: User,
//                 attributes: ['username']
//             }
//         ]
//     })
//         .then(dbPostData => {
//             // pass a single post object into the homepage template
//             console.log(dbPostData[0]);
//             const posts = dbPostData.map(post => post.get({ plain: true }));
//             res.render('homepage', { posts });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });


module.exports = router;