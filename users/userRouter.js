const express = require('express');

const router = express.Router();

router.post('/', logger, (req, res) =>
{
  
});

router.post('/:id/posts', logger, (req, res) =>
{
  
});

router.get('/', logger, (req, res) =>
{
  
});

router.get('/:id', logger, (req, res) =>
{
  
});

router.get('/:id/posts', logger, (req, res) =>
{
  
});

router.delete('/:id', logger, (req, res) =>
{
  
});

router.put('/:id', logger, (req, res) =>
{
  
});

//custom middleware

function validateUserId(req, res, next)
{
  // do your magic!

}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

function logger(req, res, next)
{
  console.log(`[x] ${req.method} - ${req.originalUrl} - ${Date.now()}`);
  next();
}

module.exports = router;
