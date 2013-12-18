if ( 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach ) {
    var circleProgressBarPlaceholders = document.querySelectorAll('.js-skill__progress'),
    	lineProgressBars = document.querySelectorAll('.js-progress__bar__ready');
    var xmlns = "http://www.w3.org/2000/svg";

	[].forEach.call(circleProgressBarPlaceholders, function(progressBar) {
		var svgElement = document.createElementNS (xmlns, 'svg');
		progressBar.appendChild(svgElement);
		
		var canvasSize = 200,
			centre = canvasSize / 2,
			radius = canvasSize * 0.8 / 2,
			s = Snap(svgElement),
			path = "",
			arc = s.path(path),    
			startY = centre - radius,
			percent = progressBar.getAttribute('data-progress');

		var progressPlaceholder = s.circle(centre, centre, radius);
			progressPlaceholder.attr({
				stroke: '#ececec',
				fill: 'none',
				strokeWidth: 6
			});

		var percentDiv = document.createElement('div');
			percentDiv.className = 'skill__progress__percent';
			progressBar.appendChild(percentDiv);

		function run(percent) {
			var endpoint = percent * 360;
			Snap.animate(0, endpoint, function (val) {
				arc.remove();
				var d = val,
					dr = d-90;
					radians = Math.PI*(dr)/180,
					endx = centre + radius*Math.cos(radians),
					endy = centre + radius * Math.sin(radians),
					largeArc = d>180 ? 1 : 0;  
					path = "M"+centre+","+startY+" A"+radius+","+radius+" 0 "+largeArc+",1 "+endx+","+endy;

				arc = s.path(path);
				arc.attr({
					stroke: '#1ba0e1',
					fill: 'none',
					strokeWidth: 6
				});
				percentDiv.innerHTML = Math.round(val/360*100) +'<span class="skill__progress__percent__sign">%</span>';
			}, 1000	, mina.easeinout);  
		}

		run(percent/100);
	});

	[].forEach.call(lineProgressBars, function(progressBar) {
		var percent = progressBar.getAttribute('data-progress');
		setTimeout(function(){
			progressBar.style.width = percent + '%';
		}, 0);
		
	});
}