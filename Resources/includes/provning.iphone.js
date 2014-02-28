var win = Ti.UI.currentWindow;
	win.backgroundColor='#fff';
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

var textButtonView = Ti.UI.createView({
	height:'100dp',
	width:'320dp',
	top:'390dp',
});
win.add(textButtonView);

var myData = [];
myData[0] = {
	name : 'Förberedelser',
	left : '10dp',
	url : 'preparations.js'
};

myData[1] = {
	name : 'Vinschema',
	left : '110dp',
	url : 'vinschema.js'
};

myData[2] = {
	name : 'Provning',
	left : '190dp',
	url : 'procedure.js'
};

myData[3] = {
	name : 'Vinerna',
	left : '260dp',
	url : 'description.js'
};


var textButton = [];
var curr = 0;


function addToMyData(myTitle, myLeft, myUrl) {

	textButton[curr] = Ti.UI.createLabel({
		Font : {fontFamily : 'papyrus', fontSize : '14sp'},
		height : '50dp',
		width : '200dp',
		top : 0,
		left : myLeft,
		text : myTitle,
	

	});
	textButtonView.add(textButton[curr]);

	textButton[curr].addEventListener('click', function(e) {
		var subWin = Ti.UI.createWindow({
			url : myUrl,
			navBarHidden : true,
			modal:true,

		});

		subWin.open();
		
	});

};

var interval = setInterval(function() {
	Ti.API.info('Executing Interval');
	addToMyData(myData[curr].name, myData[curr].left, myData[curr].url);

	curr++;
	
	if(curr == 4){
		clearInterval(interval);
	}

}, 300);


var imageView = Ti.UI.createImageView({
	width:'100%',
	top:'165dp',
	image:'images/gruppbild.jpg'
	
});
win.add(imageView);


var infoLabel=Ti.UI.createLabel({
	width:'300dp',
	height:'115dp',
	top:'50dp',
	left:'10dp',
	font:{fontSize:'11sp', fontFamily:'arial'},
	text:'Att prova vin kan låta som en snobbig och lite komplicerad historia men så behöver det inte alls vara. Vår tanke är att du som glad vinamatör ska kunna hålla i en enkel provning tillsammans med goda vänner. Vid vinprovning gäller det att man öppnar sina sinnen och låter sig guidas av dessa fantastiska hjälpmedel som de flesta av oss är födda med. Det är inte svårare än så. Det finns inget rätt eller fel.',
});
win.add(infoLabel);




