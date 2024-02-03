const express = require("express");
const app = express();
require("dotenv").config();
const PORT = 3000 || process.env.PORT;
const connectDB = require("./Config/DBConfiguration");
const cors = require("cors");
const cookieparser = require("cookie-parser");

connectDB();

app.use(express.json());
app.use(cookieparser());

app.use(
  cors({
    origin: "http://192.168.0.109:5173",
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "Content-Type, Authorization",
    credentials: true,
  })
);

app.use("/api/item", require("./Routes/ItemsRoutes"));
app.use("/api/user", require("./Routes/UserRoutes"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
