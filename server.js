// Boilerplate from V V V:
// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment

const express = require('express');
const app = express();
const timeSeriesRoutes = require('./routes/timeSeriesRoutes.js');
const dailyReportRoutes = require('./routes/dailyReportRoutes.js');
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.text());

app.use('/time_series', timeSeriesRoutes);
app.use('/daily_reports', dailyReportRoutes);
app.listen(port, () => {
  console.log("Example app listening on port ${port}!")
});