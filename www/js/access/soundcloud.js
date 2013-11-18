var soudcloud_client_id = '1ff3601991d9fcdd7d55d737080fbe4a';
var SEARCH_ARTIST_URL = 'https://api.soundcloud.com/tracks.json?client_id='+
	soudcloud_client_id +'&q=';

//Search for an artist/band
function searchSoundcloud() {

//Initialize SC
SC.initialize({
  client_id: soudcloud_client_id
});

  gather_options();

  //clear previous search
	$("#soundcloud_results").empty();

  	//Get search term
  	var search_term = $("#search_input").val();
        $.getJSON(SEARCH_ARTIST_URL + search_term, {limit: 5}, function(tracks) {
          $(tracks).each(function(track) {
            
        $("#soundcloud_results").append('<iframe width="275" height="100" scrolling="no"' +
         'frameborder="no" src="http://w.soundcloud.com/player/?url='+this.uri+
         '&auto_play=false&color=915f33&show_comments=false&show_playcount=false&show_user=false&single_active=true"></iframe>');

         
         });

       });
}

//Gather most recent option selections
function gather_options(){
  if($("#limit_input").val() != "")
  {
    limit = 10;
  }
  
  embed = $("#embed_input").prop('checked');
}
