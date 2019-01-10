var width = $(window).width();
var height = $(window).height();
var xRatio = 0.75;
var yRatio = 0.5;

$(window).on('resize', function () {
    // if (($(this).width() != width)||($(this).height() != height)) {
        width = $(this).width();
        height = $(this).height();

        if (width > 991) { xRatio = 0.4; }
        else if (width > 767) { xRatio = 0.6; }
        else { xRatio = 0.75; }

        var x = width * xRatio;
        var y = height * yRatio;
        var tan = y / x;
        var angle = Math.atan(tan) *(-180)/ Math.PI;
        // console.log("Width: "+ width +" Height: "+ height +" Angle: "+ angle);
        $("#offer-text")[0].style.transform = "rotate("+angle+"deg)";
    // }
});