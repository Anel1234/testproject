const express = require('express');

const app = express();

app.get('/', function (req, res) {

  const sql = require("mssql");

  const config = {
    user: 'GIDEV\apil',
    password: '',
    server: '(localdb)\v11.0',
    database: 'testbase'
  };

  sql.ConnectionError(config, function(err) {

    if (err) console.log(err);

    var request = new sql.Request();

    request.query('select * from users', function(err, recordset) {
 
      if (err) console.log(err);

      res.send(recordset);

    });
  });

});

const server = app.listen(8000, () => {
  console.log('Server started!');
});