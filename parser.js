function buildTable(results){
console.log(results);
	var cleaned = [];
	var url = $('#url').val();
	$('#cancel').click();
	var markup = "<table class='table'>";
	var data = results.data;

	markup+= "<tr><td colspan='2'>These Terms where removed.</td></tr>";

	for(i=0;i<data.length;i++){
		markup+= "<tr>";
		var row = data[i];
		var cells = row.join(",").split(",");

		var term = cells[0];
		var sev = cells[1];

		if(sev > 3){
			markup+= "<td>";
			markup+= term;
			markup+= "</th>";
			markup+= "<td>";
			markup+= sev;
			markup+= "</th>";
		} else {
			cleaned.push(row);
		}
		markup+= "</tr>";
	}

	markup+= "</table>";

	sendPost(cleaned,url);


	$("#results").html(markup);
}

function sendPost(cleaned, url){
	console.log("SendingPost to " + url);
	$.ajax({
		  url: url,
			data: {cleaned: cleaned},
			type: 'POST',
			dataType: 'JSON'
		}).then(function(data) {
			console.log(data);
		});
}

function removeSeverity(results){
	var data = results.data;
	for(var i = 0; i < data.length; i++) {
    var row = data[i];
		if(row[1] > 3)
    console.log("row[" + i + "][" + j + "] = " + row[j]);
	}
}


$(document).ready(function(){
		$('#submit').on("click",function(e){
			e.preventDefault();
			if (!$('#files')[0].files.length){
				alert("Please choose at least one file to read the data.");
			}

			$('#files').parse({
				config: {
					delimiter: "auto",
					complete: buildTable,
				},
				before: function(file, inputElem)
				{
					//console.log("Parsing file...", file);
				},
				error: function(err, file)
				{
					console.log("ERROR:", err, file);
				},
				complete: function()
				{
					//console.log("Done with all files");
				}
			});
		});
});
