$(function() {

    var doc   = $(document),
        click = false,
        cache = {};

    // get the anchor that points to a specific id
    var anchorById = function(id) {
        return cache[id] || (cache[id] = $("#sidebar a[href=#" + id + "]"));
    };

    // highlights a menu item
    var highlight = function(anchor) {
        $(".highlighted").removeClass("highlighted");
        (anchor ? anchorById(anchor) : $(this)).parent().addClass("highlighted");
    };

    // changes menu highlight according to scroll
    $("#content section").waypoint(function() {
        if (click) return;
        highlight($(this).attr("id"));
    });

    // ensures that when on top, "about" is the correct anchor
    doc.scroll(function() {
        doc.scrollTop() <= 0 && highlight("about");
    });

    // link activation
    $("#sidebar nav a").smoothScroll({ afterScroll: function() {
        if (click) {
            highlight.call(this);
            click = false;
        }
    }}).click(function() {
        click = true;
    });

    // first menu item highlighted by default
    highlight("about");
});
