var oLis = document.querySelectorAll("#wrap li");
var oStyle = document.querySelector("#style1");
var len = oLis.length;
var aaa = null;
for (var i = 1; i <= len; i++) {
	(function(i) {
		window.setTimeout(function() {
			oStyle.innerHTML += " #wrap ul li:nth-child(" +
				i +
				"){transform:rotateY(" +
				(len - i) * (360 / len) +
				"deg) translateZ(330px);transition:0.7s;transition-delay:" +
				(i * 0.1) +
				"s}";
		}, 100);
	})(i);
}

for (i = 0; i <= len; i++) {
	aaa += 100 / len * i + "%{transform: rotateY(" + -360 / len * i + "deg);}"
}
oStyle.innerHTML += "@keyframes move {" + aaa + "}";