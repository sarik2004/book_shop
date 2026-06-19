require("dotenv").config();
require("./src/models");
const core = require("cors");
const User = require("./src/models/user");
const bcrypt = require("bcrypt");
const express = require("express");
const asequelize = require("./src/db/connection");
// Routes
const authRoute = require("./src/routes/UserRoute");
const profileRoute = require("./src/routes/ProfileRoute");
const bookRoute = require("./src/routes/BookRoute");
const categoryRoute = require("./src/routes/CategoryRoute");
const orderRoute = require("./src/routes/OrderRoute");
const cartRoute = require("./src/routes/CartRoute");

const app = express();
app.use("/upload", express.static("upload"));
app.use(core());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api", profileRoute);
app.use("/api", bookRoute);
app.use("/api", categoryRoute);
app.use("/api", orderRoute);
app.use("/api", cartRoute);

/// create role only for admin
async function OnlyAdmin() {
  const admin = await User.findOne({
    where: {
      email: "admin123@gmail.com",
    },
  });

  if (!admin) {
    const hashPassword = await bcrypt.hash("admin123", 10);
    await User.create({
      name: "Admin",
      email: "admin123@gmail.com",
      password: hashPassword,
      role: "admin",
    });
    console.log("Admin created successfully");
  }
}

const port = process.env.PORT || 3000;
asequelize
  .sync()
  .then(async () => {
    await OnlyAdmin();
    console.log("Database synced");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
