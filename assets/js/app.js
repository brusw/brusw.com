$(function() {
    // generate link
    $('a').each(function() {
        var prefix = $(this).data('prefix');
        if (prefix) {
            $(this).attr('href', prefix + '.' + location.hostname);
        }
    });

    // video
    var $video = $('video');
    var video = $video[0];
    video.volume = 0;

    // main element
    var $main = $('.main');

    $main.onepage_scroll({
        sectionContainer: 'section',
        easing: "ease",
        animationTime: 1000,
        pagination: true,
        updateURL: false,
        beforeMove: function(index) {},
        afterMove: function(index) {
            var idx = $('section.active').data('index');
            if (idx == 1) {
                $main.attr('style', 'relative');
            }
        },
        loop: false,
        keyboard: true,
        responsiveFallback: false
    });

    // click to movedown
    $('.caret').click(function() {
        $main.moveDown();
    });

    // set info bgcolor
    var today = new Date();
    var $info = $('.info');
    var bgcolor = ['bggreen', 'bgblue', 'bgpurple'];
    var bg = bgcolor[today.getDate() % 3];
    $info.removeClass('bggreen').addClass(bg);

    //copyright year
    $('#year').html(today.getFullYear());
});
