$("document").ready(function() {

    $("#serif").click(makeSerif);

    $("#sans-serif").click(makeSans);

    $("#monospace").click(makeMono);

});

function makeSerif() {
    $("p").css("font-family", "serif");

}

function makeSans() {
    $("p").css("font-family", "sans-serif");
}

function makeMono() {
    $("p").css("font-family", "monospace");
}