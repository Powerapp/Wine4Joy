	Titanium.UI.setBackgroundColor('#000');
	
	
	function detectDevice(){
		
		if(Ti.Platform.osname=='iphone'){
			Ti.API.info('iphone');
			Ti.include('includes/procedure.iphone.js');
			
		}else if (Ti.Platform.osname=='ipad'){
				Ti.API.info('ipad');
				Ti.include('includes/procedure.ipad.js');
			}
		}	
		
	detectDevice();
