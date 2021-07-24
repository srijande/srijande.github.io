$('#particles-js').css("background-color", "rgb(0,0,0)");
particlesJS("particles-js", {
	"particles": {
		"number": {
			"value": 80,
			"density": {
			"enable": true,
			"value_area": 800
			}
		},
		"opacity": {
			"random":true,
			"value": 1,
		},
		"size": {
			"value": 2,
			"random": true,
		},
		"line_linked": {
			"enable": true,
			"distance": 175,
			"color": "#5EFF00",
			"opacity": 0.4,
		},
		"move": {
			"random": true,
			"speed": 6,
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"modes": {
			"grab": {
			"distance": 400,
			"line_linked": {
				"opacity": 0.8,
				"random": true,
				},
				"opacity": {
					"random":true,
					"value": 1,
				},
			},
		}
	},
});


document.addEventListener('visibilitychange',
function(){
    if(document.visibilityState === "visible"){
        document.title = "Srijan De | Portfolio";
        $("#favicon").attr("href","/images/srijan.jpg");
    }
    else {
        document.title = "Come Back To Portfolio";
        $("#favicon").attr("href","assests/images/favhand.png");
    }
});