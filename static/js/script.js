var s = Snap(200, 200);

var g = s.gradient("l(0, 0, 1, 1)#000-#f00-#fff");

var c = s.path('M100 0A100 100 0 0 1 100 200');

var _transformedPath = c.transform('M100 0A100 100 0 0 1 100 200');
c.animate({path: _transformedPath}, 1000);




/*
// Lets create big circle in the middle:
var bigCircle = s.circle(100, 100, 97);
// By default its black, lets change its attributes




bigCircle.attr({
    fill: "#ffffff",
    stroke: g,
    strokeWidth: 6
});
*/