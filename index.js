const express = require("express");
const app = express();
require("dotenv").config();
const CategoryRouter = require("./api/category/router");
const UserRouter = require("./api/user/Router");
const BrandRouter = require("./api/Brands/Router");
const ProductRouter = require("./api/Products/Router");
const OrderRouter = require("./api/Orders/Router");
<<<<<<< HEAD
const path = require ('path')
const cors = require("cors");
const clientPath = path.join(__dirname,'./Client/dist')
app.use('/', express.static(clientPath))
=======

const cors = require("cors");
>>>>>>> origin/master
const port = process.env.SERVER_PORT || 3000;

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api", CategoryRouter);
app.use("/api", UserRouter);
app.use("/api", ProductRouter);
app.use("/api", BrandRouter);
app.use("/api", OrderRouter);

<<<<<<< HEAD
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'./client/dist/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
=======
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
>>>>>>> origin/master
