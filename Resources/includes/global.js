var OS_is_Android = Ti.Platform.osname == "android";

var OS_is_iOS = !OS_is_Android;

var is_iOS7 = (parseInt(Ti.Platform.version) >= 7 && OS_is_iOS);


var backBtn = Ti.UI.createButton({
	top:'5dp',
	left:'5dp',
	width:'20dp',
	height:'20dp',
	backgroundImage:'/images/back_arrow.png',
	visisble:false,
});
win.add(backBtn);

backBtn.addEventListener('click', function(e){
	win.close();
	
});
