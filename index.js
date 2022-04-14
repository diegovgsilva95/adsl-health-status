"use strict";
$(document).ready(function(){
    $(document.body).on("dblclick", function(){
        const elem = document.body;
        if (elem.requestFullscreen) 
            elem.requestFullscreen();
        else if (elem.msRequestFullscreen) 
            elem.msRequestFullscreen();
        else if (elem.mozRequestFullScreen) 
            elem.mozRequestFullScreen();
        else if (elem.webkitRequestFullscreen) 
            elem.webkitRequestFullscreen();
        else 
            console.error("No fullscreen available");
    });

    $(".graph").click(function(){
        $(".sidepanel").toggleClass("sideoff");
    })
});