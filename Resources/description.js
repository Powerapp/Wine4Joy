	var win = Ti.UI.currentWindow;
	win.backgroundColor ='#fff';
	win.title='Vinerna';
	
	win.orientationModes = [
	Ti.UI.PORTRAIT,
	Ti.UI.UPSIDE_PORTRAIT,
	Ti.UI.LANDSCAPE_LEFT,
	Ti.UI.LANDSCAPE_RIGHT,
	];

	function detectDevice(){
	
	if(Ti.Platform.osname=='ipad'){
		
		Ti.include('includes/description.ipad.js');
		
	}else if (Ti.Platform.osname=='iphone'){
			
			Ti.include('includes/description.iphone.js');
		}
	}	
	
	detectDevice();





