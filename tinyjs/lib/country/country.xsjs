function saveCountry(country) {
	var conn = $.db.getConnection();
	var sql = 'INSERT INTO "tinyworld.tinydb::tinyf.country" VALUES(?, ?)';
	var stmt = conn.prepareStatement(sql);
	stmt.setNString(1, country.name);
	stmt.setNString(2, country.partof);
	stmt.execute();
	conn.commit();
}
	var body = $.request.body.asString(); 
	var country = JSON.parse(body);
//var country = {
//	name: $.request.parameters.get("name"),
//	partof: $.request.parameters.get("continent")
//}; 
// validate the inputs here! 
saveCountry(country);
$.response.status = $.net.http.CREATED;
//$.response.contentType = "application/json";
//$.response.setBody(JSON.stringify(country));