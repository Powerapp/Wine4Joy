	var win = Ti.UI.currentWindow;
	win.backgroundColor ='#fff';
	win.title='Meny';
	win.navBarHidden = true;
	win.fullscreen = true;
	win.orientationModes = [
	Ti.UI.PORTRAIT
	
	];
	

	var backgroundView = Ti.UI.createImageView({
	width:'100%',
	height:'100%',
	image:'images/menuimage_portrait_ipad.jpg',
	
	});	
	win.add(backgroundView);
	
var myData = [];
myData[0] = {
	name : 'Inköp',
	top : '50dp',
	url : 'inkop.js'
};
myData[1] = {
	name : 'Quiz',
	top : '100dp',
	url : 'quiz.js'
};
myData[2] = {
	name : 'Fakta',
	top : '150dp', 
	url : 'fakta.js'
};
myData[3] = {
	name : 'Provning',
	top : '200dp',
	url : 'provning.js'
};
myData[4] = {
	name : 'Kuriosa',
	top : '250dp',
	url : 'kuriosa.js'
};
myData[5] = {
	name : 'Tilltugg',
	top : '300dp',
	url : 'tilltugg.js'
};

var textButton = [];
var curr = 0;
var textView = Ti.UI.createView({
	width:'150dp',
	height:'400dp',
	left:'5dp',
	top:0,
	
});
win.add(textView);


function addToMyData(myTitle, myTop, myUrl) {
		
		textButton[curr] = Ti.UI.createLabel({
		font : {fontFamily :'Papyrus', fontSize : '18sp'},
		height : '50dp',
		width : '150dp',
		top : myTop,
		left : '5dp',
		text : myTitle,
		color : '#fff',

	});
	textView.add(textButton[curr]);
	
	
	textButton[curr].addEventListener('click', function(e) {
		var subWin = Ti.UI.createWindow({
			url : myUrl,
			modal:true,
			navBarHidden: true,
		
		});

		subWin.open();
		
	});

};

var interval = setInterval(function() {
	Ti.API.info('Executing Interval');
	addToMyData(myData[curr].name, myData[curr].top, myData[curr].url);

	curr++;
	
	if(curr == 6){
		clearInterval(interval);
	}

}, 300);


	var mailView = Ti.UI.createView({
		width:'180dp',
		height:'140dp',
		bottom:0,
		right:0,
		backgroundColor:'#000',
		opacity:0.7
	});
	win.add(mailView);
	
	var mailLabel = Ti.UI.createLabel({
		font:{fontSize:'12dp', fontFamily:'Myriad'},
		color:'#fff',
		right:'30dp',
		bottom:0,
		width:'130dp',
		height:'150dp',
		text:'Har du idéer och tankar om hur vi kan göra våra vinprovningar ännu bättre eller om du vill ha information när nästa vinprovarapp lanseras. Maila oss!'
	});
	win.add(mailLabel);
	
	var envelopeImage = Ti.UI.createButton({
		backgroundImage:'images/envelope.png',
		width:'40dp',
		height:'23dp',
		right:'5dp',
		bottom:'10dp'
	});
	envelopeImage.addEventListener('click', function(e){
	
	var mailWin = Ti.UI.createWindow({
		title:'Kontakta oss',
		barColor:'#000',
		url:'mail.js',
		navBarHidden:true,
		modal:true,
		
	
	});
	mailWin.open();
	});

	win.add(envelopeImage);
		
