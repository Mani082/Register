function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} else {return Array.from(arr);}} // classes to place front and back cards in proper places 

placeCards = function placeCards() {
	var wrappers = document.querySelectorAll(".wrapper");
	[].concat(_toConsumableArray(wrappers)).forEach(function (wrapper) {
		wrapper.classList.add("frontback-cards");
	});
};

// toggle class for flip animation
flipCard = function flipCard() {
	var cardContainers = document.querySelectorAll(".card-container");
	[].concat(_toConsumableArray(cardContainers)).forEach(function (card) {
		var cardBtns = card.querySelectorAll('.btn-details');
		cardBtns.forEach(function (btn) {
			btn.addEventListener('click', function () {
				card.classList.toggle("addFlip");
			}, false);
		});
	});
};

(function () {
	placeCards();
	flipCard();
})();

/*Confetti*/
(function (c) {
  var $ = c.getContext("2d"),
  w = c.width = window.innerWidth,
  h = c.height = window.innerHeight,
  pi2 = Math.PI * 2,
  random = function random(t) {return Math.random() * t;},
  binRandom = function binRandom(f) {return Math.random() < f;},
  randItem = function randItem(i) {return i[Math.floor(Math.random() * i.length)];},
  colors = [
  "7,239,243",
  "238,244,110",
  "215,14,47",
  "139,215,107",
  "245,71,104"];


  var arr = new Array(500).fill().map(function (p) {
    return {
      // position
      p: { x: random(w), y: random(h) },
      // velocity
      v: {
        x: binRandom(0.5) ? random(1) : random(-1),
        y: binRandom(0.5) ? random(1) : random(-1) },

      s: random(1) + 2, // size
      o: random(1) + 0.3, // opacity
      c: randItem(colors) // color
    };
  });

  function draw() {
    (h !== innerHeight || w !== innerWidth) && (w = c.width = innerWidth, h = c.height = innerHeight);
    $.fillStyle = "#000";
    $.fillRect(0, 0, w, h);
    arr.forEach(function (p) {
      p.p.x += p.v.x;
      p.p.y += p.v.y;
      if (p.p.x > w || p.p.x < 0) p.v.x *= -1;
      if (p.p.y > h || p.p.y < 0) p.v.y *= -1;
      $.beginPath();
      $.arc(p.p.x, p.p.y, p.s, 0, pi2);
      $.closePath();
      $.fillStyle = "rgba(" + p.c + ", " + p.o + ")";
      $.filter = blur(random(20) + "px");
      $.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();

})(c);