window.onload = function() {
	var userAgent = window.navigator.userAgent.toLowerCase();
	if((window.location + "").indexOf("/m/") == -1) {
		if(/iphone/.test(userAgent) || /android/.test(userAgent) || /opera/.test(userAgent) || /bada/.test(userAgent)) {
			var link = (window.location + "").split("/");
			var lastLink = "";
			for(var i in link) {
				if(i == link.length - 1) {
					break;
				}
				lastLink += link[i] + "/";
			}
			window.location = lastLink + "m/index.html";
		}
	}
}

function go(url) {
	var link = "";
	var location = window.location + "";
	for(var i = 0; i < location.split("/").length - 1; i++)
		link += location.split("/")[i] + "/";
	window.location = link + url;
}

function allgo(url) {
	window.open(url);
}

function projectScroll() {
	var scr = 0;
	if($('#project').scrollLeft() > (document.getElementById("project").scrollWidth - document.getElementById("project").clientWidth) / 2)
		scr = 0;
	else
		scr = (document.getElementById("project").scrollWidth - document.getElementById("project").clientWidth);

	$("#project").animate({
    scrollLeft: scr
  }, 500);
}

function scrollText() {
	if($('#project').scrollLeft() > (document.getElementById("project").scrollWidth - document.getElementById("project").clientWidth) / 2)
		document.getElementById("scroller").innerHTML = "<";
	else
		document.getElementById("scroller").innerHTML = ">";
}


function openProfile() {
  $("#profile-index").slideToggle(300, function() {

  });
}

function openInformation() {
  $("#information-index").slideToggle(300, function() {

  });
}

function openDevelop() {
  $("#develop-index").slideToggle(300, function() {

  });
}

function openGame() {
  $("#game-index").slideToggle(300, function() {

  });
}

function downblue() {
	window.open("https://docs.google.com/uc?authuser=0&id=0BynSEqQ9CpItdXgxdmR3NXY2UGM&export=download");
}

function downMipmapCreater() {
	window.open("https://play.google.com/store/apps/details?id=com.afterglow.mipmapcreater");
}