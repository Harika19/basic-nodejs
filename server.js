const express = require("express");
const app = express();

app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`started server successfully at port ${PORT} `);
});