require("dotenv").config();
const express = require("express");
const app = express();
const port = 8000;
const expressLayouts = require("express-ejs-layouts");

app.use(expressLayouts);
app.set("view engine","ejs");    //ejs 엔진 사용
app.set("views","./views");     //view관련 파일은 views 폴더에 존재 

app.use("/", require("./routes/main"));

app.listen(port,() => {
    console.log("8000번 포트에서 실행중")
});