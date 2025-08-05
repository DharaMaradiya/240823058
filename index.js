
const express=require ("express");
const stuentRoute=require("./routes/studentRoute");
const app=express();
const port=80;
app.use(express.json());

app.use("/student",studentRoute);

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}/`);
});