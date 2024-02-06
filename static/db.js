// var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

var conString = "postgres://tklkhqhm:VkDoenK8M9UFAbTt5nl-O7zfu0ZJjqeE@lucky.db.elephantsql.com/tklkhqhm"
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  
  client.query('SELECT * FROM "public"."mapper_find" LIMIT 100', function(err, result2) {
    if(err) {
      return console.error('error running query', err);
    }

    console.log("REsult2", result2.rows)
    console.log(result2.rows[0].location_coordinates)
    console.log("test in DB file")
    // >> output: 2018-08-23T14:02:57.117Z
    module.exports = result2
    window.result2formaps = result2

    return result2, result2formaps
  });
});