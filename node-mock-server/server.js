const express = require("express");
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var taskList = [
    {
        id: "1",
        title: "learn vue.js",
    },{
        id: "2",
        title: "learn node.js",
    },{
        id: "3",
        title: "develop spa",
    }
]

app.get("/v1/tasks/:id", (req, res) => {
    let data
    for (i = 0; i < taskList.length; i++){
        if (taskList[i].id == req.params.id){
            data = taskList[i]
        }
    }
    res.json(data);
})

var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
})
