function setup() {
    createCanvas( windowWidth, 300 );
}


// using 'let' instead of 'var'
let pos_x = 0;
let pos_y = 0;
let d = 30;
let r = d/2;

function draw() {
    background( 'rgb(3, 78, 115)' );

    // define drawing parameters
    fill(255);
    noStroke();

    // USE A FOR LOOP

    for( var i=0; i < 10; i++ ) {
        // find the x_pos
        pos_x = width * i/10 + r;
        // draw an ellipse
        ellipse( pos_x, pos_y, d );
    }

    pos_y++;
    if (pos_y > height) {
        pos_y = 0;
    }
}
