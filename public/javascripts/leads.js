

function deleteLead(leadId) {
	// console.log("DELETE FUNCTION INVOKED")
	$.ajax({
		url: '/lead/' + leadId + '/delete-json',
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		data: JSON.stringify({leadId}),
		type: 'POST',
		success: ((res) => {
			console.log("Result: ", res)
			$("#"+leadId).remove();
		}),
		error: ((error) => {
			console.log("Error: ", error);
		})
	});
}