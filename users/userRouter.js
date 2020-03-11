const express = require('express');
const DB = require("./userDb");

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

router.get('/:id', logger, validateUserId, (req, res) =>
{
  console.log(req.user);
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

function failOut(res, err, msg)
{
  res.status(err).json({"error":msg});
}

function validateUserId(req, res, next)
{
  let ID = req.params.id;
  if (!ID /* How are we even here?? */ || isNaN(ID))
  {
    failOut(res, 500, "Invalid request paramaters");
    return;
  }

  DB.getById(ID).then((response)=>
  {
    if (response === undefined)
    {
      failOut(res, 404, "User not found");
      return;
    }
    
    req.user = response;
    next();
  }).catch((error)=>
  {
    failOut(res, 500, "Internal connection error");
  });
}

function validateUser(req, res, next)
{
  // do your magic!

}

function validatePost(req, res, next)
{
  // do your magic!

}

function logger(req, res, next)
{
  console.log(`[x] ${req.method} - ${req.originalUrl} - ${Date.now()}`);
  next();
}

module.exports = router;
