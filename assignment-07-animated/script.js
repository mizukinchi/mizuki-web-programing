$("document").ready(function() {

    $("#monospace").click(on);

    $("#off").click(off);

});


function on() {
    $(".book").css("color", "red");
    $("p").css("color", "white");
}

function off() {
    $(".book").removeAttr("style");
    $("p").css("color", "black");
}