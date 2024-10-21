// API - application software interface
//An API (Application Programming Interface) allows different programs to communicate. Think of it like a waiter at a restaurant. You (the customer) ask for food, the waiter takes the order to the kitchen (the server), and then brings the food back to you. In an API, your computer asks for information, and the server sends back what you need.

// 1. Import express
import express from "express";

// 2. build the server
const app = express();

// 9. Create a post route -> create a middleware to parse json data
app.use(express.json());

// 3. Define the PORT
const PORT = 3000;

// 4. Define the route
app.get("/", (req, res) => {
  res.send("Welcome to our API!");
});

// 5. Create the listener
app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});

// 6. Run the server

// 8. Add other routes
app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "Gloria" },
    { id: 2, name: "Tomas" },
  ];
  res.json(users);
});

// 10. create the post route
app.post("/users", (req, res) => {
  const newUser = req.body;
  console.log(newUser);
  res.json({ message: "User added successfully!", use: newUser });
});

// 11. test using Insomnia
// to test the post route http://localhost:3000/users , add the following data in the body of the request
// {
// 	"id": 3,
// 	"name": "Mateo"
// }
