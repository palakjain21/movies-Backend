const express = require("express");
const cors = require("cors");
const { Client } = require("@notionhq/client");
const env = require("dotenv");
const notion = new Client({
  auth: "secret_BJAWekAPIOMfXPd1TzImGLBjjaCdsaxqWrcaryEEeAP",
});
const databaseRouter = require("./db_router");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
const PORT = 8000;
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/", databaseRouter);

app.listen(PORT, () => {
  console.log("server started at ", PORT);
});
