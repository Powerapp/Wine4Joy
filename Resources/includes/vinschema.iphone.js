	var win = Ti.UI.currentWindow;
	win.backgroundColor ='#fff';
	win.orientationModes = [
	Ti.UI.PORTRAIT
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
	image:'images/vinschema.jpg',

	
});
win.add(view);


var mailText = Ti.UI.createLabel({
	width:'200dp',
	height:'30dp',
	bottom:'5dp',
	left:'10dp',
	font:{fontFamily:'Arial', fontSize:'11sp'},
	text:'Maila lista som pdf'
	
	
});
win.add(mailText);

var envelopeImage = Ti.UI.createButton({
		backgroundImage:'images/envelope_black.jpg',
		width:'40dp',
		height:'23dp',
		left:'110dp',
		bottom:'10dp'
	});
	envelopeImage.addEventListener('click', function(e){	
		mail();
	
	});
	
	win.add(envelopeImage);