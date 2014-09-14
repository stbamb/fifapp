function searchByLeague()
{
	$('#page-content-wrapper2').html("<p></p>"); // para vaciar el contenido, alistar para la siguiente busqueda
	Parse.initialize("Dv4oYn0Ri2yDSvvy5WjEDcflbUDCXwZlZvT5NReZ", "pAUAzo4IlTIXZfGSeGB4qOKgc0o2bK9ksxA84a02");
	var clubleague = document.getElementById('fcleague-search').value;
	imageURLs = [];
	Parse.Cloud.run('searchByLeague', {league: clubleague}, {
	  success: function(result) {
	  	for (var i = 0; i < result.length; i++)
	  	{
		  	var object = result[i];
		  	imageURLs.push(object.get('logo'));
		  	$('#page-content-wrapper2').append("<p>" + object.get('name') + "</p>");
		  	$('#page-content-wrapper2').append("<img src='" + imageURLs[i].url() + "'/>"); 
		}
	  },
	  error: function(error) { }
	});
}
