const express = require('express');
const DB = require("./userDb");

const router = express.Router();

router.post('/', (req, res) =>
{
  
});

router.post('/:id/posts', (req, res) =>
{
  
});

router.get('/', (req, res) =>
{
  
});

router.get('/:id', (req, res) =>
{
  
});

router.get('/:id/posts', (req, res) =>
{
  
});

router.delete('/:id', (req, res) =>
{
  
});

router.put('/:id', (req, res) =>
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
  let UserData = req.body;
  if (!UserData || !UserData.name)
  {
    failOut(res, 500, "Invalid request paramaters");
    return;
  }
  next();
}

function validatePost(req, res, next)
{
  let UserData = req.body;
  if (!UserData || !UserData.text)
  {
    failOut(res, 500, "Invalid request paramaters");
    return;
  }
  next();
} 

module.exports = router;
