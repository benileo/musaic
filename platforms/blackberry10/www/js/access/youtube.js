//Search for an artist/band

var SEARCH_YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search?\
part=snippet&\
videoSyndicated=true&\
type=video&\
videoLicense=youtube&\
videoEmbeddable=true&\
key=AIzaSyDqOskIfAmyH9bciyMTcbjGyLWqxHWaSjQ&\
q=';

function searchYoutube() {
    $("#youtube_results").empty();
    var search_term = $("#search_input").val();
    $.getJSON(SEARCH_YOUTUBE_URL + search_term, function(tracks) {
        $(tracks.items).each(function(track) {                            
            $("#youtube_results").append("<div class=\"widget\"> \
                <div class=\"widget-head\" id=\"youtube_video\">\
                    <div class=\"pull-left\">"+this.snippet.title+"</div>\
                    <div class=\"clearfix\"></div>\
                </div>\
                <div class=\"widget-content\" style=\"display: none;\">\
                    <div id=\"youtube_results\" class=\"padd\">\
                        <iframe width=\"200\" \
                        height=\"200\" \
                        src=\"http://www.youtube.com/embed/" + this.id.videoId + "\" \
                        frameborder=\"0\" allowfullscreen></iframe>\
                    </div>\
                </div>\
            </div>");
        })
    });
}

$( '#youtube_results' ).on( 'click', '#youtube_video', function () {
        var item = $(this).next();
        console.log(item.attr('style'));
        if(item.attr('style') == 'display: none;'){
                item.attr('style', 'display: true;');
        }
        else{
                item.attr('style', 'display: none;');
        }
 });