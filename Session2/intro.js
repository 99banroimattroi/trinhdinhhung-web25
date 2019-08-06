// var express = require("express");
// var bodyParser = require("body-parser");


// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.get("/", ( request, response) =>{
//     Response.json({
//         message: "Hello"
//     });

// });


// app.get("/hello", (req, res) => {
//     console.log(req.query);
//     res.json({
//         message: "Hello, "+ req.query.name + "!"
//     })
// })
// app.get("/class/:id", (req, res) =>{
//     res.json({
//         params: req.params
//     })
// })

// app.get("/class",(req, res) =>{
    
//     res.json({
//         message:"GET request"
//     })
// })


// app.post("/class",(req, res) =>{
//     console.log(req.body);
//     res.json({
//         message:"POST request"
//     })
// })

// app.listen(3000, () => console.log("Server is listening at 3000"));




// BT
var express = require("express");
var bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/sum/:x1/:x2", (req, res) =>{
    res.json({
        result:Number(req.params.x1) + Number(req.params.x2)
    })
})
app.get("/sum", (req, res) => {
    res.json({
        result: Number(req.query.x1) + Number(req.param.x2)
    })
})

let students = [];

app.get("students", (req,res) => {
    res.json({
        result: students
    })
})

app.post("/students", (req,res) => {
    students.push({
        id: req.body.id,
        name: req.body.name
    })
    res.json({
        success: true
    })
})

app.put("/students/:id", (req, res) => {
    students = students.map(item => {
        if(item.id === Number(req.params.id)) {
            item.name = req.body.name
        }
        return item
    })
    res.json({
        success: true
    })
})

app.get("/students/:id", (req, res) => {
    return students.find(item => item === Number(req.param.id))
})

app.delete("/students/:id", (req, res) =>{
    students = students.filter(item => item.id !== req.param.id)
    res.json({
        success: true
    })
})

app.listen(3000, () => console.log("Server is listening at 3000"));
