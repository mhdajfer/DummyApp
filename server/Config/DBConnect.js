const mongoose = require("mongoose");

const ConnectMongoDB = () => {
  mongoose
    .connect(
      `mongodb+srv://ajferaju9961:Achuaju6@cluster.p3idumj.mongodb.net/veryNewDummy`
    )
    .then(() => console.log("Database connection established"))
    .catch((err) => {
      console.log("db connection error :", err);
    });
};

module.exports = ConnectMongoDB;
