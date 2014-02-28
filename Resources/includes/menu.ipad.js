var win = Ti.UI.currentWindow;

	win.backgroundColor ='#fff';
	win.title='Meny';
	win.navBarHidden = true;
	win.orientationModes = [
	Ti.UI.PORTRAIT,
	Ti.UI.UPSIDE_PORTRAIT,
	Ti.UI.LANDSCAPE_LEFT,
	Ti.UI.LANDSCAPE_RIGHT,
	];


function handleOrientation(orientation){
 if(orientation == 0 || orientation == 5){
	
	}else if (Ti.Gesture.isLandscape(orientation)) {
		mailView.bottom ='30dp';
		mailView.right='150dp';
		mailLabel.bottom='35dp';
		mailLabel.right='155dp';
		envelopeImage.bottom='45dp';
		envelopeImage.right='160dp';
		textView.left = '150dp';
		textView.top = '70dp';
		
		} else {
		mailView.bottom ='80dp';
		mailView.right='30dp';
		mailLabel.bottom='80dp';
		mailLabel.right='40dp';
		textView.left = '60dp';
		textView.top = '140dp';
		envelopeImage.bottom='90dp';
		envelopeImage.right='45dp';
	
	}
}
Ti.Gesture.addEventListener('orientationchange', function (ev) {
  handleOrientation(ev.orientation);
  
});


var backgroundView = Ti.UI.createImageView({
	width:'768dp',
	height:'1024dp',
	image:'images/menuimage_portrait_ipad.jpg',
	
	});	
	win.add(backgroundView);
	
var myData = [];
myData[0] = {
	name : 'Inköp',
	top : '0dp',
	url : 'inkop.js'
};
myData[1] = {
	name : 'Provning',
	top : '100dp',
	url : 'provning.js'
};
myData[2] = {
	name : 'Kuriosa',
	top : '200dp',
	url : 'kuriosa.js'
};
myData[3] = {
	name : 'Quiz',
	top : '300dp',
	url : 'quiz.js'
};
myData[4] = {
	name : 'Fakta',
	top : '400dp', 
	url : 'fakta.js'
};
myData[5] = {
	name : 'Tilltugg',
	top : '500dp',
	url : 'tilltugg.js'
};

var textButton = [];
var curr = 0;
var textView = Ti.UI.createView({
	width:'150dp',
	height:'700dp',
	left:'60dp',
	top:0,
	
});
win.add(textView);



function addToMyData(myTitle, myTop, myUrl) {
		
		textButton[curr] = Ti.UI.createLabel({
		Font : {fontFamily : 'Papyrus', fontSize : '26sp'},
		height : '50dp',
		width : '150dp',
		top : myTop,
		left : '10dp',
		text : myTitle,
		color : '#fff',

	});
	textView.add(textButton[curr]);

	textButton[curr].addEventListener('click', function(e) {
		var subWin = Ti.UI.createWindow({
			title : myTitle,
			url : myUrl,
			modal : true,
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
		width:'150dp',
		height:'140dp',
		bottom:'80dp',
		right:'30dp',
		backgroundColor:'#000',
		opacity:0.7
	});
	
		win.add(mailView);
	
	var mailLabel = Ti.UI.createLabel({
		font:{fontSize:'12dp', fontFamily:'Myriad'},
		color:'#fff',
		right:'40dp',
		bottom:'80dp',
		width:'130dp',
		height:'150dp',
		text:'Har du idéer och tankar om hur vi kan göra våra vinprovningar ännu bättre eller om du vill ha information när nästa vinprovarapp lanseras. Maila oss!'
	});
	
	
	win.add(mailLabel);
	
	var envelopeImage = Ti.UI.createButton({
		backgroundImage:'images/envelope.png',
		width:'40dp',
		height:'23dp',
		right:'45dp',
		bottom:'90dp'
	});
	envelopeImage.addEventListener('click', function(e){
	
	var mailWin = Ti.UI.createWindow({
		title:'Kontakta oss',
		url:'mail.js',
		modal:true,
		
	
	});
	mailWin.open();
	});


	win.add(envelopeImage);
	handleOrientation();
