$(function() {

    var doc   = $(document),
        cache = {};

    // get the anchor that points to a specific id
    var anchorById = function(id) {
        return cache[id] || (cache[id] = $("#sidebar a[href=#" + id + "]"));
    };

    // highlights a menu item
    var highlight = function(e, anchor) {
        $(".highlighted").removeClass("highlighted");
        (anchor ? anchorById(anchor) : $(this)).parent().addClass("highlighted");
    };

    // changes menu highlight according to scroll
    $("#content section").waypoint(function() {
        highlight(0, $(this).attr("id"));
    });

    // ensures that when on top, "about" is the correct anchor
    doc.scroll(function() {
        doc.scrollTop() <= 0 && highlight(0, "about");
    });

    $("#sidebar nav a").smoothScroll();

    // first menu item highlighted by default
    highlight(0, "about");
});
