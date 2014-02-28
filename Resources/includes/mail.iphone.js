var win = Ti.UI.currentWindow;
	win.backgroundColor ='#fff';
	win.title = 'Kontakta oss';
	
	win.orientationModes = [
	Ti.UI.PORTRAIT
	];
		
Ti.include('global.js');

function mail(){
		if(mailSwitch.value == true){
			getInfoLabel.text='Ja tack, informera mig om nya vinprovarappar';
		}else{
			getInfoLabel.text='Nej tack, informera mig inte om nya vinprovarappar';
		}
		var emailDialog = Ti.UI.createEmailDialog({
			subject: "E-post från Wine4Joy",
			toRecipients: ['info@powerapp.se'],
			messageBody: 'E-post från en glad vinamatör<br><br>'+ 'Min e-post: '+myEmail.value+'<br><br>' +getInfoLabel.text +'<br><br>'+ 'Min kommentar: ' + myComment.value,
			html:true,
	});
	emailDialog.addEventListener('complete',function(e)
    {
        if (e.result == emailDialog.SENT)
        {
            if (Ti.Platform.osname != 'android') {
                // android doesn't give us useful result codes.
                // it anyway shows a toast.
                alert("Mailet är skickat!");
            }
        }
        else
        {
            alert("Mailet skickades inte. result = " + e.result);
        }
    });
              
                emailDialog.open();
            }
            
   
	var back = Ti.UI.createButton({
	    title: "meny",
	    style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
	});
	back.addEventListener("click", function() {
	    Ti.UI.currentWindow.close();
	   
	});
	Ti.UI.currentWindow.setLeftNavButton(back);

	
	var containerView = Titanium.UI.createScrollView({
		width:'100%',
		height:'100%',
		contentHeight:'100%',
		contentWidth:'100%'
});
win.add(containerView);
	
	var mailSwitch = Titanium.UI.createSwitch({
		titleOn:'Ja tack, informera mig om nya vinprovarappar',
	  	titleOff:'Nej tack, informera mig inte om nya vinprovarappar',
		left:'20dp',
		top: '30dp',
		value: true
	});
	
	mailSwitch.addEventListener('change',function(e){
	  Ti.API.info('Switch value: ' + mailSwitch.value);
	  getInfoLabel.text = mailSwitch.value;
	  if(mailSwitch.value==0){
	  	getInfoLabel.text ='Nej tack, informera mig inte om nya vinprovarappar';
	  }else{
	  	getInfoLabel.text ='Ja tack, informera mig om nya vinprovarappar';
	  	
	  }
	  
	  
	});
	containerView.add(mailSwitch);
	
	var getInfoLabel = Ti.UI.createLabel({
		text:'Ja tack, informera mig om nya vinprovarappar',
		width:'300dp',
		left:'20dp',
		top:'80dp',
		font:{fontfamily:'arial', fontSize:'12sp'}
	});
	containerView.add(getInfoLabel);
	
	var myEmail = Ti.UI.createTextField({
		borderStyle: Titanium.UI.INPUT_BORDERSTYLE_BEZEL,
		keyboardType:Titanium.UI.KEYBOARD_EMAIL,
		returnKey: Titanium.UI.RETURNKEY_DONE,
		font:{fontFamily:'Myriad', fontSize:'17sp'},
	    width:'280dp',
		height:'30dp',
		top:'110dp',
		left:'20dp',
		hintText:'Skriv din e-postadress här',
		value: Ti.App.Properties.getString('txtEmail', ''),
		autocorrect: false,
	
		
	});
	myEmail.addEventListener('change', function(e){
		Ti.App.Properties.setString('txtEmail', e.value);
		
	});
	
	myEmail.addEventListener('return', function(e){
		myComment.focus();
	});
	containerView.add(myEmail);
	
	var commentText = Ti.UI.createLabel({
		text:'Skriv kommentarer, synpunkter, ris eller ros här.',
		top:'160dp',
		left:'20dp',
		width:'280dp',
		height:'30dp',
		font:{fontfamily:'arial', fontSize:'12sp'}
		
	});
	containerView.add(commentText);
	
	var myComment = Ti.UI.createTextArea({
		borderWidth:'1dp',
		borderGradient:'1dp',
		value: Ti.App.Properties.getString('txtComment', ''),
		font:{fontFamily:'Arial', fontSize:'17sp'},
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
		returnKey: Titanium.UI.RETURNKEY_DONE,
		width:'280dp',
		height:'150dp',
		top:'190dp',
		left:'20dp',
		autocorrect: false,
	});
	
	myComment.addEventListener('change', function(e){
		Ti.App.Properties.setString('txtComment', e.value);
		
	});
	containerView.add(myComment);
	

	
	var eraseButton = Ti.UI.createButton({
		height:'40dp',
		width:'100dp',
		top:'370dp',
		left:'20dp',
		title:'Radera',
	});
	
	
	eraseButton.addEventListener('click', function(e){
		Ti.App.Properties.removeProperty('txtComment');
		myComment.value = '';
		Ti.App.Properties.removeProperty('txtEmail');
		myEmail.value = '';
		mailSwitch.value=true;

	});
	
	containerView.add(eraseButton);
	
	var sendButton = Ti.UI.createButton({
		height:'40dp',
		width:'100dp',
		top:'370dp',
		right:'20dp',
		title:'Skicka',
	});
	
	
	sendButton.addEventListener('click', function(){
		mail();
		
		
	});
	containerView.add(sendButton);
	
	if(is_iOS7){
	win.fullscreen = true;
	backBtn.visisble = true,
	backBtn.top = '20dp',
	containerView.top = '40dp';
}
