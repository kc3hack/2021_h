(function() {
	function drawLine() {
	  var canvas = document.getElementById("myCanvas");

	  if (!canvas || !canvas.getContext) {
		return false;
	  }

	  var ctx = canvas.getContext("2d");

	  var a = document.getElementById("doko").getBoundingClientRect();
	  var b = (a.bottom - a.top) /2;
	  var c = (a.right - a.left) /2;
	  var d = a.top+b;
	  var e = a.left+c;

	  var kokoda = document.getElementById("koko").getBoundingClientRect();
	  var tate = (kokoda.bottom - kokoda.top)/2;
	  var yoko = (kokoda.right - kokoda.left)/2;
	  var tatehalf =kokoda.top+tate;
	  var yokohalf =kokoda.left+yoko;

	  ctx.strokeStyle = "#ffba00";
	  ctx.lineWidth = 5;
	  ctx.beginPath();
	  ctx.moveTo(d,e);
	  ctx.lineTo(yokohalf,tatehalf);
	  ctx.setLineDash([5, 10]);
	  ctx.closePath();
	  ctx.stroke();
	}

	onload = drawLine;
  })();
