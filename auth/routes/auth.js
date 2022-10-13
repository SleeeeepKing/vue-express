var express = require('express');
var router = express.Router();

/* GET home page. */
const user_list=[{
    username:"wangyang",
    password:"123456"
},
{
    username:"dusan",
    password:"123456"
},
{
    username:"makavejev",
    password:"123456"
}]
const user_link=[]
router.post('/login', function(req, res, next) {
   
    var user_name = req.body.username;
    var password = req.body.password;

    if(user_list.find((res)=>{return res.username===user_name}).password==password)
    {
        callbackURI = "http://localhost:3000/callback"
        if(user_link.find((res)=>{ return res==user_name})===undefined)
        user_link.push(user_name);
        res.redirect(callbackURI+"/"+user_name)
        res.send(user_name)

    }
    else
    res.redirect("/#incorectLogin");
});

router.post('/recive',function(req,res){
    console.log("recive")
    var token = req.body.token;
    if(user_link.find((res)=>{ return res==token})===undefined)
         res.send(false)
         else
         res.send(true)
});

router.get('/login', function(req, res, next) {
    console.log(req.session)
    if(req.session.user_name!=undefined)
    res.send(true);
    else
    res.send(false);
  });

module.exports = router;