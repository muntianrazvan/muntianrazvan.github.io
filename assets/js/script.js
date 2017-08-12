$(document).ready(function() {
    // Arrows functionality
    $(".arrow").click(function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 500);
    });
});
