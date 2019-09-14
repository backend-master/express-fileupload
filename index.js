const express = require("express");
const app = express();
const upload = require("express-fileupload");

app.use(upload());

app.post("/upload", function(req, res) {
  if (req.files) {
    console.log(req.files);
    const file = req.files.filename;
    const filename = file.name;
    file.mv("./file-upload/" + filename, function(err) {
      if (err) {
        console.log(err);
        res.send("<h1>Upload gagal!</h1>");
      } else {
        res.send("<h1>Upload sukses!</h1>");
      }
    });
  }
});
app.listen(3210, function() {
  console.log("Run @port 3210!");
});
