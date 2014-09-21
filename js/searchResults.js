function searchClubs()
{
	searchByLeague();
	searchByName();
}

function searchByLeague()
{
	$('#page-content-wrapper').html("<p></p>"); // para vaciar el contenido, alistar para la siguiente busqueda
	Parse.initialize("Dv4oYn0Ri2yDSvvy5WjEDcflbUDCXwZlZvT5NReZ", "pAUAzo4IlTIXZfGSeGB4qOKgc0o2bK9ksxA84a02");
	var clubLeague = document.getElementById('fc-search').value;
	imageURLs = [];
	Parse.Cloud.run('searchByLeague', {league: clubLeague}, {
	  success: function(result) {
	  	if (result.length == 0)
	  	{
	  		$('#page-content-wrapper').append("<p>No clubs matched your criteria</p>");
	  	}
	  	else
	  	{
		  	for (var i = 0; i < result.length; i++)
		  	{
			  	var object = result[i];
			  	imageURLs.push(object.get('logo'));
			  	$('#page-content-wrapper').append("<p>" + object.get('name') + "</p>");
			  	$('#page-content-wrapper').append("<img src='" + imageURLs[i].url() + "'/>"); 
			}
		}
	  },
	  error: function(error) { }
	});
}

function searchByName()
{
	$('#page-content-wrapper').html("<p></p>"); // para vaciar el contenido, alistar para la siguiente busqueda
	Parse.initialize("Dv4oYn0Ri2yDSvvy5WjEDcflbUDCXwZlZvT5NReZ", "pAUAzo4IlTIXZfGSeGB4qOKgc0o2bK9ksxA84a02");
	var clubName = document.getElementById('fc-search').value;
	imageURLs = [];
	Parse.Cloud.run('searchByName', {name: clubName}, {
	  success: function(result) {
	  	if (result.length == 0)
	  	{
	  		$('#page-content-wrapper').append("<p>No clubs matched your criteria</p>");
	  	}
	  	else
	  	{
		  	for (var i = 0; i < result.length; i++)
		  	{
			  	var object = result[i];
			  	imageURLs.push(object.get('logo'));
			  	$('#page-content-wrapper').append("<p>" + object.get('name') + "</p>");
			  	$('#page-content-wrapper').append("<img src='" + imageURLs[i].url() + "'/>"); 
			}
		}
	  },
	  error: function(error) { }
	});
}
