const express = require("express");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(cors({origin: ['http://localhost:4000', '']}));
app.use(morgan("dev"));

//routes
// 1 test route
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

//port
const PORT = process.env.PORT || 8000;

//listen
app.listen(PORT, () => {
  mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("db connected"))
    .catch((err) => console.log(err.message));
  console.log(`Server is running at http://localhost:${PORT}`)
});
