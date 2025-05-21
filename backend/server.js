import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // loads varibles from .env file into process.env

const app = express();

 // console.log(process.env.KEY); // WE GET 12345 WHEN WE RUN node server.js in the terminal 


//* Middleware
app.use(cors());
app.use(express.json());

//* Routes
app.get("/", (req, res) => {
  res.json("Simple Animal App");
});


//* Global Error Handler
app.use((err, req, res, next) => {
  console.error("Error:", err.message || err);
  res.status(err.status || 500).json({
    error: err.message || "Something went wrong on the server.",
  });
});


const port = process.env.PORT || 3003;


app.listen(port, () => {
  if (process.env.NODE_ENV === "development"){
    console.log(`development: server is listining @ ${port}`);
    
  }else { 
    console.log(`production: :server is listening @ ${port}`);
    
  }

});
