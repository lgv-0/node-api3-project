const express = require('express');
const UserDB = require("./userDb");
const PostDB = require("../posts/postDb");

const router = express.Router();

router.post('/', validateUser, (req, res) =>
{
  //New user
  UserDB.insert(req.userdata).then((response)=>
  {
    res.status(200).json(response);
  }).catch((error)=>
  {
    failOut(res, 500, "Internal connection error");
  });
});

router.post('/:id/posts', validatePost, validateUserId, (req, res) =>
{
  PostDB.insert({text:req.postdata.text, user_id:req.user.id}).then((response)=>
  {
    res.status(200).json(response);
  }).catch((error)=>
  {
    failOut(res, 500, error);
  });
});

router.get('/', (req, res) =>
{
  UserDB.get().then((response)=>
  {
    res.status(200).json(response);
  }).catch((error)=>
  {
    failOut(res, 500, "Internal connection error");
  })
});

router.get('/:id', validateUserId, (req, res) =>
{
  res.status(200).json(req.user);
});

router.get('/:id/posts', validateUserId, (req, res) =>
{
  UserDB.getUserPosts(req.user.id).then((response)=>
  {
    res.status(200).json(response);
  }).catch((error)=>
  {
    failOut(res, 500, "Internal server error");
  });
});

router.delete('/:id', validateUserId, (req, res) =>
{
  UserDB.remove(req.user.id).then((response)=>
  {
    res.status(200).json(response);
  }).catch((error)=>
  {
    failOut(res, 500, "Internal connection error");
  })
});

router.put('/:id', validateUser, validateUserId, (req, res) =>
{
  UserDB.update(req.user.id, req.userdata).then((response)=>
  {
    res.status(200).json(response);
  }).catch((error)=>
  {
    failOut(res, 500, "Internal server error");
  });
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

  UserDB.getById(ID).then((response)=>
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
  req.userdata = {name:UserData.name};
  next();
}

function validatePost(req, res, next)
{
  let PostData = req.body;
  if (!PostData || !PostData.text)
  {
    failOut(res, 500, "Invalid request paramaters");
    return;
  }
  req.postdata = {text:PostData.text};
  next();
} 

module.exports = router;
