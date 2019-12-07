var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('GET request to the homepage');
});

app.get('/weather/api/weathers/1.json', function(req, res) {
  fake_data = {
    data: {
      felt_air_temp: 100,
      rainfall: 1,
      desc: "Good"
    }
  }

  res.send(JSON.stringify(fake_data));
})

app.listen(3000, function () {
  console.log("HTTP server is listening at port 3000.")
});
