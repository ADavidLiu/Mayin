$(document).ready(function () {
    var tabs = $("ul.nav-tabs li");
    var tabContent = $(".tab-content");
    
    tabs.click(function () {
        tabContent.addClass("padding");
    });
});