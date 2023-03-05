import express from "express";
import { Tour, tours } from "./tours";

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.static("public")); // response with files

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("hello");
});

app.get("/users", (req, res) => {
  console.log(users);
  res.send({ users });
});

app.get("/tours", (req, res) => {
  res.send({ tours });
});
app.get("/tours/:id", (req, res) => {
  const { id } = req.params;
  const tourId = Number(id);
  const tourDB = tours.filter((tour) => {
    return tour.id === tourId;
  });
  res.send({ tourDB });
});

app.post("/tours", (req, res) => {
  console.log(req.body);
  const { tourName, id, price } = req.body;
  tours.push({ name: tourName, id, price });
  res.send({ tours });
});



//max group size

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

const users = [
  { firstName: "gili", age: "restricted" },
  { firstName: "esti", age: "also restricted" },
];

//Http methods
//get - get information from server
//post - send information and create somthing new
//patch - update somthing small
//put - update somthing big
//delete - delete somthing
