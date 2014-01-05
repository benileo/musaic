
var embed =false;
var limit = 5;

function search(){
	searchSoundcloud();
	search8tracks();
	searchYoutube();
};

$('input').keydown( function(e) {
    if (e.keyCode == 13) {
        search();
    }
});

//Called when user clicks the search button on top bar (no form submit)
// we also need to add a search button
// 

//$("#search_button").click(function(){