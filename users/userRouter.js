const express = require('express');

const router = express.Router();

router.post('/', (req, res) =>
{
  logger(req.method, req.originalUrl, Date.now());

  res.status(200).json({"msg":"ok"});
});

router.post('/:id/posts', (req, res) =>
{
  logger(req.method, req.originalUrl, Date.now());
});

router.get('/', (req, res) =>
{
  logger(req.method, req.originalUrl, Date.now());
});

router.get('/:id', (req, res) =>
{
  logger(req.method, req.originalUrl, Date.now());
});

router.get('/:id/posts', (req, res) =>
{
  logger(req.method, req.originalUrl, Date.now());
});

router.delete('/:id', (req, res) =>
{
  logger(req.method, req.originalUrl, Date.now());
});

router.put('/:id', (req, res) =>
{
  logger(req.method, req.originalUrl, Date.now());
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

function logger()
{
  let Build = "";
  for (var i = 0; i < arguments.length; i++)
    Build += arguments[i] + (i !== arguments.length - 1 ? ", " : "");
  console.log(Build);
}

module.exports = router;
