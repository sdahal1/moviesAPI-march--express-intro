const express = require("express"); //tells the file to use express so we can have express features available in the variable
const cors = require("cors"); //allows us to do cross-origin-resource-sharing so that this api can send and recieve data to external sources
const port = 8000;
const app = express(); //create a variable call app that is going to be an instance of an express server. We have express features available in the variable "app"

app.use(cors());
app.use(express.json());


let moviesDB = [
    {title: "Austin Powers: Goldmember" , rating: 10 },
    {title: "Interstellar" , rating: 10 },
    {title: "Avatar the Nickolodeon one tho" , rating: 10 },
    {title: "Orphan Black" , rating: 10 },
    {title: "Last Samaurai" , rating: 10 },
    {title: "Gostbusters" , rating: 10 }
]


app.get("/", (req,res)=>{
    res.json({message: "Hello world!"})
})

//get all the cinemas
app.get("/cinemas", (req, res)=>{
    res.json({results: moviesDB })
})


//get one cinema by id
app.get("/cinemas/:cinemaID", (req,res)=>{
    res.json({results: moviesDB[req.params.cinemaID]})
})

//post request to create a movie using info from front end
app.post("/cinemas", (req, res)=>{
    console.log("*********")
    console.log(req.body)
    console.log("*********")
    moviesDB.push(req.body)
    res.json({status: "ok, you submitted", results: moviesDB})

})






app.listen(port, () => console.log(`Listening on port ${port}`));