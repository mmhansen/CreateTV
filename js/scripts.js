
///////////////////////////////////////////////////////////
// Get Channel names => retrieve channel data from names //
///////////////////////////////////////////////////////////

$(document).ready(function(){

var getChannels = 'https://api.twitch.tv/kraken/streams?game=Creative&limit=100';
var liveStreams = [];
var streams, 
	viewers,
	displayName,
	logo,
	mature,
	status,
	videoLink,
	selfLink,
	thumbnail;
var activeChannels = [];


$.getJSON(getChannels, function(data){
	streams = data.streams;
	for (var prop in streams){
		// grab that sum'bitch!
		var channelHeld = streams[prop];

		// info for generated card

			viewers = channelHeld['viewers'],
			displayName = channelHeld['channel']['display_name'],
			logo = channelHeld['channel']['logo'],
			mature = channelHeld['channel']['mature'],
			status = channelHeld['channel']['status'],
			videoLink = 'https://player.twitch.tv/?volume=0.5&channel='+displayName,
			selfLink = 'http://api.twitch.tv/kraken/channels/' + displayName + '/profile';

			thumbnail = channelHeld['preview']['medium'];

			activeChannels.push(displayName);

		// console.log(channelHeld);

		showStreams(prop);
		// end for Each
	}
// end json
})

function showStreams(num){

$('.stream-location').append("<div id='name-"+ displayName +"' class='stream-" + num +"'></div>");
	// appending to above
	$('.stream-'+num).append("<div class='content-stream-" + num + "'></div>");
		// appending to above
			// content divs
		$('.content-stream-'+num).append("<img src='" + thumbnail + "'>");
		$('.content-stream-'+num).append("<div class='name-content-stream-" + num + "'><span>" + displayName + "</span></div>");
			// hover divs
		$('.content-stream-'+num).append("<div class='content-hover-" + num + "'></div>")
			$('.content-hover-'+num).append("<a target ='_blank' href='https://player.twitch.tv/?volume=0.5&channel=" + displayName + "'><div class='glyphicon glyphicon-play'></div></a>");	
			$('.content-hover-'+num).append("<div class='hover-info-overlay'><span class='glyphicon glyphicon glyphicon-facetime-video'></span><span class='viewers'>" + viewers +"</span></div>");
	      
}




/////////////////////////////////////////////////
// Display first 20, and have load more button //
/////////////////////////////////////////////////


// end doc ready
})


/*


from page load, show all in box

but have search bar at the top that instantly finds results and trims shown videos

show one out of first 5 as a large player

have ability to open others into large player, when one is open, close all others

*/