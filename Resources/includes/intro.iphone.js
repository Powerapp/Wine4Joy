	var win = Ti.UI.currentWindow;
	win.fullscreen = true;
	win.backgroundColor = '#000';
	win.orientationModes = [Ti.UI.PORTRAIT];
	

	
	var imageView = Ti.UI.createImageView({
		top : 0,
		left : 0,
		right : 0,
		bottom : 0,
		image : 'images/intro_portrait_ipad.jpg',
	
	});
	win.add(imageView);
	
	var menuButton = Ti.UI.createButton({
		width : '70dp',
		height : '35dp',
		top : '100dp',
		right : '130dp',
		backgroundImage : 'images/menu_image_ipad.jpg'
	});
	menuButton.addEventListener('click', function() {
		var subWin = Ti.UI.createWindow({
			url : 'menu.js',
			backgroundColor : '#000',
			modal : true,
			navBarHidden:true,
			fulscreen:true,
		});
		subWin.open();
	
	});
	
	win.add(menuButton);
	


