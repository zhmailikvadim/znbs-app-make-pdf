const express = require('express');
const generatePDF = require( './src/lib/generatePDF.js');

const app = express();

app.get("/", async (req, res) => {
  const pdf = await generatePDF(`
  <html>
    <head>
      <title>Test PDF</title>
      <style>
        body {
          padding: 60px;
          font-family: "Hevletica Neue", "Helvetica", "Arial", sans-serif;
          font-size: 16px;
          line-height: 24px;
        }

        body > h4 {
          font-size: 24px;
          line-height: 24px;
          text-transform: uppercase;
          margin-bottom: 60px;
        }

        body > header {
          display: flex;
        }

        body > header > .address-block:nth-child(2) {
          margin-left: 100px;
        }

        .address-block address {
          font-style: normal;
        }

        .address-block > h5 {
          font-size: 14px;
          line-height: 14px;
          margin: 0px 0px 15px;
          text-transform: uppercase;
          color: #aaa;
        }

        .table {
          width: 100%;
          margin-top: 60px;
        }

        .table table {
          width: 100%;
          border: 1px solid #eee;
          border-collapse: collapse;
        }

        .table table tr th,
        .table table tr td {
          font-size: 15px;
          padding: 10px;
          border: 1px solid #eee;
          border-collapse: collapse;
        }

        .table table tfoot tr td {
          border-top: 3px solid #eee;
        }
      </style>
    </head>
    <body>
      <h4>Invoice</h4>
      <header>
        <div class="address-block">
          <h5>Recipient</h5>
          <address>
            Doug Funnie<br />
            321 Customer St.<br />
            Happy Place, FL 17641<br />
          </address>
        </div>
        <div class="address-block">
          <h5>Sender</h5>
          <address>
            Skeeter Valentine<br />
            123 Business St.<br />
            Fake Town, TN 37189<br />
          </address>
        </div>
      </header>
      <div class="table">
        <table>
          <thead>
            <tr>
              <th style="text-align:left;">Item Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align:left;">Swiss Army Cat</td>
              <td style="text-align:center;">$32.70</td>
              <td style="text-align:center;">x1</td>
              <td style="text-align:center;">$32.70</td>
            </tr>
            <tr>
              <td style="text-align:left;">Holeless Strainer</td>
              <td style="text-align:center;">$9.00</td>
              <td style="text-align:center;">x2</td>
              <td style="text-align:center;">$18.00</td>
            </tr>
            <tr>
              <td style="text-align:left;">"The Government Lies" T-Shirt</td>
              <td style="text-align:center;">$20.00</td>
              <td style="text-align:center;">x1</td>
              <td style="text-align:center;">$20.00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2" />
              <td style="text-align:right;"><strong>Total</strong></td>
              <td style="text-align:center;">$70.70</td>
            </tr>
          </tfoot>
        </table>
      </div>
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
