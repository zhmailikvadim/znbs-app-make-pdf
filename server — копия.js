const express = require("express");
// var fetch = require('node-fetch');
const {JSDOM} = require("jsdom");
const {window} = new JSDOM("");
const $ = require("jquery")(window);

var pdf = require("html-pdf");

const app = express();

var options = {
    format: "Letter"
};

app.use("/", async (req, res) => {
    var id = req.query.id;

    /*console.log(id);
     //jQuery.cors = true;
    var data = await $.ajax({
        url: "https://e45a6686-a148-4876-87de-f109792bbcb2.abap-web.eu10.hana.ondemand.com/sap/opu/odata/sap/ZNBS_UI_O2_PRJ_RQ/?sap-client=100?$format=json",
        dataType: 'json',
        method: 'GET',
        data: {
            "now": true
        }
    });
    console.log(data);
    /*await fetch("https://e45a6686-a148-4876-87de-f109792bbcb2.abap-web.eu10.hana.ondemand.com/sap/opu/odata/sap/ZNBS_UI_O2_PRJ_RQ/?sap-client=100?$format=json", requestOptions).then((response) => response.json()).then((result) => {
        console.log(result)

    }).catch((error) => console.log("error", error));*/


    const html = `<html><head><title>Test Project PDF</title>
                  </head><body>
                    Project ` + id + ` information will  be here
                  </body></html>`;

    pdf.create(html).toBuffer(function (err, buffer) {
        res.set("Content-Type", "application/pdf");
        res.send(buffer);
    })
});
const port = process.env.PORT || 4000;
app.listen(port, function () {
    console.log(`listening on port ${port}`);
});
