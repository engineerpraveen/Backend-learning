const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const app = express();

const PORT = 5000;

// app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://vaishnavpraveen001:yIrO2LUyhzwaRJ0m@cluster0.4ufcv.mongodb.net/Movie_Ticket_App?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("DB Connected"))
  .catch((error) => {
    console.log(error);
  });

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log("Server Started at Port", PORT);
});
