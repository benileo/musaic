var eighttracks_client_id = 'c5a4c1235cbbbc287e091b3b0479a1260e90edcd';
var SEARCH_8TRACKS_URL = 'http://8tracks.com/mixes.json?api_key=' + eighttracks_client_id +'&q=';

//Search for an artist/band
function search8tracks() {

  gather_options();

  //clear previous search
  $("#8tracks_results").empty();

  //Get search term
  var search_term = $("#search_input").val();
  
  $.getJSON(SEARCH_8TRACKS_URL + search_term, {limit: 5}, function(tracks) {
    $(tracks.mixes).each(function(track) { 
      $("#8tracks_results").append('<iframe src="' + this.restful_url +'/player_v3_universal" ' +
        'width="300" height="250" style="border: 0px none;"></iframe>' +
      '<p class="_8t_embed_p" style="font-size: 11px; line-height: 12px;">' +
      '<a href="">Neverland</a> from <a href="">moraesfelipe</a> on ' +
      '<a href="http://8tracks.com">8tracks Radio</a>.</p>');
    });
  });
}

//Gather most recent option selections
function gather_options() {

  if($("#limit_input").val() != "")
  {
    limit = $("#limit_input").val();
  }
  
  embed = $("#embed_input").prop('checked');
}
