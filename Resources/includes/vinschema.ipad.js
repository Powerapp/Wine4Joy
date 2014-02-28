var win = Ti.UI.currentWindow;
	win.backgroundColor='#fff';
	win.title='Vinschema';	
			win.orientationModes = [
			Ti.UI.PORTRAIT,
			Ti.UI.UPSIDE_PORTRAIT,
			Ti.UI.LANDSCAPE_LEFT,
			Ti.UI.LANDSCAPE_RIGHT
			];
			
			
		function handleOrientation(orientation){
 	if(orientation == 0 || orientation == 5){

	}else if (Ti.Gesture.isLandscape(orientation)) {
			

			mailBackground.bottom='50dp';
			mailBackground.right='200dp';
			mailText.bottom='60dp';
			mailText.right='203dp';
			envelopeImage.right='208dp';
			envelopeImage.bottom='64dp';
	
	} else {
	
	 	
			
			mailBackground.bottom='50dp';
			mailBackground.right='80dp';
			mailText.bottom='60dp';
			mailText.right='88dp';
			envelopeImage.right='94dp';
			envelopeImage.bottom='64dp';
	}
}

Ti.Gesture.addEventListener('orientationchange', function (ev) {
  handleOrientation(ev.orientation);
  
});	
		
			
var back = Ti.UI.createButton({
    title: "Tillbaka",
    style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});
back.addEventListener("click", function() {
    Ti.UI.currentWindow.close();
});

Ti.UI.currentWindow.setLeftNavButton(back);


function mail(){
		var emailDialog = Ti.UI.createEmailDialog();
			emailDialog.subject = "Wine 4 Joy vinschema";
			emailDialog.toRecipients = [''];
			emailDialog.messageBody = '<b>Vi hoppas ni får en trevlig provning!</b>';
			emailDialog.html =true;
			emailDialog.setBarColor('#000');
	
	var attachedFile = Ti.Filesystem.getFile('vinschema.pdf');
	emailDialog.addAttachment(attachedFile);
	
		if(emailDialog.isSupported()) {
		    emailDialog.open();
		} else {
		    alert('Konfigurera din e-post');
		}
		emailDialog.addEventListener('complete', function(e) {
		
		            if(e.result == emailDialog.SENT) {
				
		                alert("Meddelandet är skickat");
		}
		      else if(e.result == emailDialog.CANCELLED)
		        {
		           
		            alert("Meddelandet raderat");
		        }
		        else if(e.result == emailDialog.SAVED)
		        {
		        
		            alert("Meddelandet sparades");
		        }
		     
		    });
		   
		           
		        emailDialog.open();
		}
	

var view = Ti.UI.createImageView({
	image:'images/vinschema_ipad.jpg',

	
});
win.add(view);

var mailBackground = Ti.UI.createView({
	width:'220dp',
	height:'50dp',
	bottom:'50dp',
	right:'80dp',
	backgroundColor:'#000',
	opacity:0.3
	
	
});

win.add(mailBackground);

var mailText = Ti.UI.createLabel({
	width:'200dp',
	height:'30dp',
	bottom:'60dp',
	right:'88dp',
	color:'#fff',
	font:{fontFamily:'Arial', fontSize:'14sp'},
	text:'Maila schema som pdf'
	
	
});
win.add(mailText);

var envelopeImage = Ti.UI.createButton({
		backgroundImage:'images/envelope.png',
		width:'40dp',
		height:'23dp',
		right:'94dp',
		bottom:'64dp'
	});
	envelopeImage.addEventListener('click', function(e){	
		mail();
	
	});
	
	win.add(envelopeImage);
	handleOrientation();
