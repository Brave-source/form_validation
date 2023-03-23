const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const authRoute = require("./routes/user")
const app = express();
const _dirname = path.dirname("");
const buildPath = path.join(_dirname, "../client/build");
// mongodb+srv://validator:90Wg40wjWM6blvDj@artboardz.b8xqc.mongodb.net/?retryWrites=true&w=majority
mongoose
  .connect("mongodb+srv://emmy:iorolun45@firstcluster.fypsmgo.mongodb.net/form_validation?retryWrites=true&w=majority")
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });
//90Wg40wjWM6blvDj
// validator
app.use(express.static(buildPath));

app.get("/*", function(req, res) {
    res.sendFile(
        path.join(__dirname, "../client/build/index.html"),
        function(err) {
            if(err) {
                res.status(500).json(err);
            }
        }
    )
})

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(3000, function(){
    console.log("Listing at port 3000")
})