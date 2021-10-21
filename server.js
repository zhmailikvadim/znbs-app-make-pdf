const express = require("express");

var pdf = require("html-pdf");

const app = express();

var options = {
    format: "Letter"
};

app.use("/", async (req, res) => {
    const ProjectUUID = req.query.ProjectUUID;
    const ProjectID = req.query.ProjectID;
    const ProjectDescription = req.query.ProjectDescription;
    const DevStatus = req.query.DevStatus;
    const EffortStatus = req.query.EffortStatus;
    const FunctionalExpert = req.query.FunctionalExpert;
    const NovartisSME = req.query.NovartisSME;
    const ProjectEndDate = req.query.ProjectEndDate;
    const ProjectManager = req.query.ProjectManager;
    const ProjectManagerTxt = req.query.ProjectManagerTxt;
    const ProjectStatusName = req.query.ProjectStatusName;
    const ProposedDevEndDate = req.query.ProposedDevEndDate;
    const ProposedDevStartDate = req.query.ProposedDevStartDate;
    const RqEffortDate = req.query.RqEffortDate;
    const SbEffortDate = req.query.SbEffortDate;
    const TechnicalExpert = req.query.TechnicalExpert;
    const TechnicalSME = req.query.TechnicalSME;
    const Comments = req.query.Comments;

    var html = `<html><head><title>Test Project PDF</title>
                  </head><body>
                    Project ` + ProjectUUID + ` information will  be here
                  </body></html>`;

    html = `<html>
  <head>
    <title>Project</title>
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
    <h4>Project Id: ` + ProjectID  + `</h4>
    <header>
      <div class="address-block">
        <h5>ProjectDescription</h5>
        <address>
        `+ProjectDescription+`
        <br></br></address>
      </div>
      <div class="address-block">
        <h5>ProjecManager</h5>
        <address>`+ProjectManager+`
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
</html>`;

    pdf.create(html).toBuffer(function (err, buffer) {
        res.set("Content-Type", "application/pdf");
        res.send(buffer);
    });
});

const port = process.env.PORT || 4000;

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});
