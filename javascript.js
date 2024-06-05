$(document).ready(function() {
    var hash = window.location.hash;
    if (hash) {
        $('.nav-link[href="' + hash + '"]').tab('show');
    }

    $('a.nav-link').on('click', function (e) {
        e.preventDefault();
        $(this).tab('show');
    }).on('shown.bs.tab', function (e) {
        window.location.hash = e.target.hash;
    });

    $('.flip-card-btn').on('click', function() {
        var cardInner = $(this).closest('.flip-card').find('.flip-card-inner');
        cardInner.toggleClass('rotate');
    });
});
