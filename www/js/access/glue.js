//---------------- OPTIONS ----------------
//Embed player widgets
var embed =false;
//Limit of results to return
var limit = 5;

//Called when user clicks the search button on top bar (no form submit)
//$("#search_button").click(function(){
function search(){
	
	search8tracks();
	
	searchYoutube();

	searchSoundcloud();


};

$('input').keydown(function(e) {
    if (e.keyCode == 13) {
        search();
    }
});