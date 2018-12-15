//taken from https://stackoverflow.com/questions/1361149/get-img-thumbnails-from-vimeo

function vimeoLoadingThumb(id){
    var url = "https://vimeo.com/api/v2/video/" + id + ".json?callback=showThumb";

    var id_img = "#vimeo-" + id;

    var script = document.createElement( 'script' );
    script.src = url;

    $(id_img).before(script);
}


function showThumb(data){
    var id_img = "#vimeo-" + data[0].id;
    $(id_img).attr('src',data[0].thumbnail_medium);
}