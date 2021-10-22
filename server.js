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

    let tableHTML = `<table><tbody>`;
    for (var param in req.query) {
        tableHTML = tableHTML + '<tr><td>' + param + `</td><td>` + req.query[param] + `</td></tr>`;
    }
    tableHTML = tableHTML + `</tbody></table>`;
    
    html = `
              <html>
              <head>
              <title>Project</title>
              <style>
                body {
                  padding: 40px;
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
                  margin-top: 30px;
                }
                .table table {
                  width: 100%;
                  border: 1px solid #eee;
                  border-collapse: collapse;
                }
                .table table tr th,
                .table table tr td {
                  font-size: 10px;
                  padding: 5px;
                  border: 1px solid #eee;
                  border-collapse: ridge;
                }
                .table table tfoot tr td {
                  border-top: 3px solid #eee;
                }
                </style>
                </head>
                <body>
                  <h2>Project Id:${ProjectID}</h2>
                  <header>
                    <div class="address-block">
                      <h5>Project Description</h5>
                      <address>${ProjectDescription}
                      <br></br></address>
                    </div>
                    <div class="address-block">
                      <h5>Project Manager</h5>
                      <address>
                      ${ProjectManagerTxt}
                      </address>
                    </div>
                    <br>
                    <div class="address-block">
                      <h5>Project information:</h5>
                    </div>                    

                  </header>
                  <div class="table">${tableHTML}</div>
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
