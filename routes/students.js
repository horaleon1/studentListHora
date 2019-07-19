const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/uno', (req, res, next) => {
  res.render('uno');
});

router.get('/dos', (req, res, next) => {
  res.render('dos');
});

router.post('/newStudent', (req,res,next) => {
let {name, age } = req.body
});

module.exports = router;