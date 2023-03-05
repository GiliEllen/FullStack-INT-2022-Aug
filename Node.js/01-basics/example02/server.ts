import express from "express";

const app = express();
const port = 4000;

app.use(express.json());

app.get("/", (req:express.Request, res:express.Response) => {
  res.send("hello");
});

app.get("/users", (req, res) => {
    res.send({users})
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});


const users = [
    {firstName: "gili", age: "restricted"},
    {firstName: "esti", age: "also restricted"}
]