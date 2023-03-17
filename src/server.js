require('dotenv').config();

const express = require("express");
const app = express();
const routes = require('./routes/index');
const port = process.env.PORT;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(routes);

app.use(
    (err, req, res, next) => {
      if (res.headersSent) {
        return next(err);
      }
  
      return res.status(err.status || 500).json({
        error: err.message,
      });
    }
  );

app.get("/", (req, res)=>{
    res.send("Server is working");
});

app.listen(port ?? 3000, ()=>{console.log(`Server is running on http://localhost:${port}`)});