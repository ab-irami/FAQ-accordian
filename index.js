

$("div").click(function(){
    var clickedDiv = $(this).attr("id");
    $("#" + clickedDiv + " summary").toggleClass("bold-text");
    $("#" + clickedDiv + " .arrow-img").toggleClass("rotated-img");
}); 


