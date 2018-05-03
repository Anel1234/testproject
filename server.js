var express = require('express');
var app = express();

app.get('/', function (req, res) {

  var sql = require('mssql');

  var config = {
    user: 'testuser',
    password: 'Nottingham14',
    server: 'transsqldev',
    database: 'GI_CRS_UTMS_APIL',
  };

  sql.connect(config, function(err) {

    if (err) console.log(err);

    var request = new sql.Request();

    request.query('select * from workflows', function(err, recordset) {
 
      if (err) console.log(err);

      res.send(recordset);

    });
  });

});

var server = app.listen(8000, () => {
  console.log('Server started!');
});