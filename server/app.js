const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const UserModel = require("./Models/user");
const ConnectMongoDB = require("./Config/DBConnect");

const app = express();

const port = process.env.PORT || 3000;

ConnectMongoDB();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = ["http://dummy.com"];
const corsOptions = {
  origin: allowedOrigins,
};
app.use(cors(corsOptions));

app.get("/api/home", (req, res) => {
  console.log("Received a GET request to /");
  res.json({ message: "Hello from the Express server!" });
});

app.post("/api/getUser", async (req, res) => {
  console.log("Received a GET request to getUser");
  const { userName } = req.body;

  const user = await UserModel.findOne({ firstName: userName });
  console.log(user);

  res.json({ user: user });
});

app.post("/api/createUser", async (req, res) => {
  try {
    const { firstName, age } = req.body;

    // Create a new user document
    const newUser = new UserModel({ firstName, age });

    // Save the new user to the database
    const savedUser = await newUser.save();

    // Respond with success message and the created user
    res
      .status(201)
      .json({ message: "User created successfully", user: savedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating user" });
  }
});

app.listen(port, () => {
  console.log(`listening on porttt ${port}`);
});
