# Express Handle File Upload

Make an endpoint for handling upload file using `express-fileupload` module, you can install using npm :

```sh
npm install express-fileupload --save
```

or using yarn :

```sh
yarn add express-fileupload
```

# Frontend Side

```html
<body>
  <h1>Tes Upload File</h1>
  <form
    method="post"
    enctype="multipart/form-data"
    action="http://127.0.0.1:3210/upload"
  >
    <input type="file" name="filename" />
    <input type="submit" value="UPLOAD" />
  </form>
</body>
```

# Backend Side

```javascript
app.post("/upload", (req, res) => {
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
```
