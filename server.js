const express = require("express");

var pdf = require("html-pdf");

const app = express();

var options = { format: "Letter" };

app.use("/", async (req, res) => {
  const html = `<html><head><title>Test Project PDF</title>
                  </head><body>
                    Project information will  be here
                  </body></html>`;

  pdf.create(html).toBuffer(function (err, buffer) {
    res.set("Content-Type", "application/pdf");
    res.send(buffer);
  });
});

const port = process.env.PORT || 4000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
