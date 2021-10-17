const express = require("express");
const generatePDF = require("./src/lib/generatePDF.js");
const puppeteer = require("puppeteer");

const app = express();

app.use("/", async (req, res) => {
  try {
     const pdf = await generatePDF(`<html>
    <head>
      <title>Test Project PDF</title>
    </head>
    <body>
      Project information will  be here
    </body>
  </html>`);

    await res.set("Content-Type", "application/pdf");
    res.send(pdf);
  } catch (e) {
    res.send(e);
  }
});

const port = process.env.PORT || 4000;

app.listen(port, function () {
  console.log(`myapp listening on port ${port}`);
});
