'use strict';
var chrono = require('chrono-node');
var moment = require('moment');


module.exports = function(Datecalc) {
	Datecalc.calculateDate = function(data,cb){

		var nums = new RegExp(/^[0-9]*$/g);
		var test_unix = nums.test(data);
		
		if(test_unix){
			data = parseInt(data);
			var x = moment.unix(data).format('YYYY-MM-DDTHH:mm:ssZ');
		}else{
			var x = chrono.parseDate(data);
		}

		if(x && x!=="Invalid date"){
			var unix_ts = moment(x).startOf('day').unix();
			var nat_date = moment(x).startOf('day').format('MMMM DD,YYYY');
			return cb(null,{
				"unix":unix_ts,
				"natural":nat_date
			});
		}else{
			return cb(null,{
				"unix":null,
				"natural":null
			});
		}
	}
};
