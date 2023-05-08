// const express = require("express");
// const cors = require("cors");
// const { Client } = require("@notionhq/client");

// const notion = new Client({
//   auth: "secret_BJAWekAPIOMfXPd1TzImGLBjjaCdsaxqWrcaryEEeAP",
// });
// const databaseRouter = require("./db_router");
// const app = express();
// const PORT = 8000;
// const HOST = "localhost";

// (async () => {
//   const database_id = "737ac0f9817047ad81f11c543185e547";

//   const response = await notion.databases.retrieve({ database_id });
//   console.log(response);
// })();
// // const getDatabaseSchema = async (req, res) => {
// //   const database_id = "a189704256dc453db3eb37ebb1f3caf8";
// //   const response = await notion.databases.retrieve({
// //     database_id,
// //   });
// //   console.log(response);
// //   res.json(response);
// // };

// // app.use("/", databaseRouter);
// app.listen(() => {
//   console.log("server connected");
// });
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
  // console.log("server started at ", env.NOTION_TOKEN);
  console.log("server started at ", PORT);
});
