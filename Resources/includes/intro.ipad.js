var win = Ti.UI.currentWindow;
	win.backgroundColor ='#000';
	
	win.orientationModes = [
	Ti.UI.PORTRAIT,
	Ti.UI.UPSIDE_PORTRAIT,
	Ti.UI.LANDSCAPE_LEFT,
	Ti.UI.LANDSCAPE_RIGHT
	];
	
function handleOrientation(orientation){
	if(orientation == 0 || orientation == 5){

	}else if (Ti.Gesture.isLandscape(orientation)) {
      	menuButton.bottom='20dp';
		menuButton.right='130dp';

	} else {
       	menuButton.bottom='20dp';
		menuButton.right='40dp';

	}
}

Ti.Gesture.addEventListener('orientationchange', function (ev) {
  handleOrientation(ev.orientation);
  
});

function detectDevice(){
	if(Ti.Platform.osname=='iphone'){
		imageView.width='100%';
		imageView.height='100%';
		menuButton.width='70dp';
		menuButton.height='35dp';
		menuButton.left='120dp';
		menuButton.top='80dp';
	}else{
		
	}
}

var imageView = Ti.UI.createImageView({
	width:'768dp',
	height:'1024dp',
	image:'images/intro_portrait_ipad.jpg',
	
});
win.add(imageView);

var menuButton = Ti.UI.createButton({
	width:'100dp',
	height:'50dp',
	bottom:'20dp',
	right:'40dp',
	backgroundImage:'images/menu_image_ipad.jpg'
});
menuButton.addEventListener('click', function(){
	var subWin = Ti.UI.createWindow({
		url:'menu.js',
		backgroundColor:'#000',
		modal:true
	});
	subWin.open();

});

win.add(menuButton);
detectDevice();
handleOrientation();
