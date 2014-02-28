	var win = Ti.UI.currentWindow;
		
		win.orientationModes = [
		Ti.UI.PORTRAIT,
		Ti.UI.UPSIDE_PORTRAIT,
		Ti.UI.LANDSCAPE_LEFT,
		Ti.UI.LANDSCAPE_RIGHT,
		];


	function detectDevice(){
	
	if(Ti.Platform.osname=='ipad'){
		
		Ti.include('includes/inkop.ipad.js');
		
	}else{
		
		Ti.include('includes/inkop.iphone.js');

		}
}

			
detectDevice();
