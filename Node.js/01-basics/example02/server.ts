import express from "express";
import { Tour, tours } from "./tours";

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.static("public")) // response with files

app.get("/", (req:express.Request, res:express.Response) => {
  res.send("hello");
});

app.get("/users", (req, res) => {
    console.log(users)
    res.send({users})
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});


const users = [
    {firstName: "gili", age: "restricted"},
    {firstName: "esti", age: "also restricted"}
]

//Http methods
//get - get information from server
//post - send information and create somthing new
//patch - update somthing small
//put - update somthing big
//delete - delete somthing