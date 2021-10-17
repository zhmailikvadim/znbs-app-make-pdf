import express from "express";
import generatePDF from "./src/lib/generatePDF.js";

const app = express();

app.get("/", async (req, res) => {
  const pdf = await generatePDF(`
      <html>
        <head>
          <title>Test Project PDF</title>
        </head>
        <body>
           Project PDF
        </body>
      </html>
    `);

  res.set("Content-Type", "application/pdf");
  res.send(pdf);
});

const port = process.env.PORT || 4000;

app.listen(port, function () {
  console.log(`myapp listening on port ${port}`);
});
