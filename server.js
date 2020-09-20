const express = require("express");
const app = express();
const index = require("./routes/index");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.get("/", index);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`started server successfully at port ${PORT} `);
});
