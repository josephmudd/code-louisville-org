var App = {
    attachHandlers: function () {

        $('[data-toggle="tooltip"]').tooltip()

        App.bubble.on('click', 'a[href^="#"]', function(e)
        {
            e.preventDefault()
            App.scrollTo($(this.hash))
        })
    },
    bubble: $('body'),
    init: function () {
        App.attachHandlers()
    },
    scrollTo: function($t)
    {
        $('html, body').stop().animate({
            'scrollTop': $t.offset().top
        }, 400, 'swing', function(){
            window.location.hash = $t.attr('id')
        })
    }
}

App.init()