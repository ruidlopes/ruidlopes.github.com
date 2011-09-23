$(function() {

    var doc   = $(document),
        links = $("#sidebar nav a"),
        cache = {};

    // get the anchor that points to a specific id
    var anchorById = function(id) {
        return cache[id] || (cache[id] = $("#sidebar a[href=#" + id + "]"));
    };

    // highlights a menu item
    var highlight = function(e, anchor) {
        links.removeClass("highlighted");
        (anchor ? anchorById(anchor) : $(this)).addClass("highlighted");
    };

    // changes menu highlight according to scroll
    $("#content section").waypoint(function() {
        highlight(0, $(this).attr("id"));
    });

    // ensures that when on top, "about" is the correct anchor
    doc.scroll(function() {
        doc.scrollTop() == 0 && highlight(0, "about");
    });

    links.smoothScroll();

    // first menu item highlighted by default
    highlight(0, "about");
});
