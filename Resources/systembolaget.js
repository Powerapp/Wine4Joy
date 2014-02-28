var win = Ti.UI.currentWindow;
	win.backgroundColor = '#fff';
win.orientationModes = [
	Ti.UI.PORTRAIT,
	Ti.UI.UPSIDE_PORTRAIT,
	Ti.UI.LANDSCAPE_LEFT,
	Ti.UI.LANDSCAPE_RIGHT,
	];



var backBtn = Ti.UI.createButton({
	top:'20dp',
	left:'5dp',
	width:'20dp',
	height:'20dp',
	backgroundImage:'/images/back_arrow.png',

});
win.add(backBtn);

backBtn.addEventListener('click', function(e){
	win.close();
	
});



var webView = Ti.UI.createWebView({
	url:win.minUrl,
	left:0,
	top:'50dp',
	right:0,
	bottom:0,

});
win.add(webView);



