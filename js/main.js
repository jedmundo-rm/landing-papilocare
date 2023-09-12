

    $('.menu-btn').on('click', function() {
        var elem = $(this),
            item = $('.menu-item'),
            active = 'is-active',
            play = 'menu-item--play';

        // Si tiene la clase Active es pq estamos en version Mobile
        if (elem.hasClass(active) ) {

            //alert('no tiene active, se va a quitar');
            elem.removeClass(active);
            $(item.get().reverse()).each(function(i) {
                var row = $(this);
                setTimeout(function() {

                    $("#navigation").css('height', '40px');

                    row.removeClass(play);

                }, 50*i);
            });

        }

        // Si NO tiene la clase Active es pq estamos en version Desktop
        else {
            //alert('tiene active, se va a poner');
            elem.addClass(active);
            item.each(function(i) {
                var row = $(this);
                setTimeout(function() {

                    $("#navigation").css('height', 'auto');

                    row.addClass(play);
                }, 50*i);
            });

        }

    });    
