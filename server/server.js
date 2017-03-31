let express = require('express')


let port = process.env.PORT || 1337
let app = express()

app.get('/',function(req,res){
  res.send("Welcome to the Fridge API, for Dev information check the github ReadMe.")
})

app.get('/api/user',function(req,res){
  res.send("API get all users")
  console.log("API get all users")
})

app.get('/api/user/:id',function(req,res){
  res.send("API get user by id")
  console.log("API get user by id")
})

app.get('/api/house',function(req,res){
  res.send("API get all houses")
  console.log("API get all houses")
})

app.get('/api/house/:house',function(req,res){
  res.send("API get house by id")
  console.log("API get house by id")
})

app.post('/api/user/:id',function(req,res){
  res.send("API added user by id")
  console.log("API added user by id")
})

app.post('/api/user',function(req,res){
  res.send("API added user")
  console.log("API added user")
})

app.post('/api/house',function(req,res){
  res.send("API added house")
  console.log("API added house")
})

app.put('/user/:id',function(req,res){
  res.send("API edited user by id")
  console.log("API edited user by id")
})

app.put('/house/:id',function(req,res){
  res.send("API edited house by id")
  console.log("API edited house by id")
})

app.listen(1337,function(){
  console.log('Server is on '+port)
})
