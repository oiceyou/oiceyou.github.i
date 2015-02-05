$(document).ready( function() {
        $(document).keydown( function(key) {
                switch( parseInt(key.which, 10) ) {
                        // Left arrow key pressed
                        case 37:
                          $('img').animate( {left: "-=10px"}, 'fast' );
                          break;
                        // Up arrow
                        case 38:
                          $('img').animate( {top: "-=10px"}, 'fast' );
                          break;
                        // Right arrow
                        case 39:
                          $('img').animate( {left: "+=10px"}, 'fast' );
                          break;
                        // Down arrow
                        case 40:
                          $('img').animate( {top: "+=10px"}, 'fast' );
                          break;
                }
        });
});
