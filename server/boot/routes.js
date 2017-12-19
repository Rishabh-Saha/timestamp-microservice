
module.exports = function(app) {
  // Install a "/ping" route that returns "pong"
  app.get('/:date', function(req, res) {
	var date = req.params.date;	
	app.models.Datecalc.calculateDate(date,function(err,success){
			res.send(success);
		})
  });
}