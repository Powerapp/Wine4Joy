var win = Ti.UI.currentWindow;
	win.backgroundColor='#fff7c5';
	win.orientationModes = [
	Ti.UI.PORTRAIT,
	Ti.UI.UPSIDE_PORTRAIT,
	Ti.UI.LANDSCAPE_LEFT,
	Ti.UI.LANDSCAPE_RIGHT
	];
	
	
	
var back = Ti.UI.createButton({
    title: "Meny",
    style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});
back.addEventListener("click", function() {
    Ti.UI.currentWindow.close();
});

Ti.UI.currentWindow.setLeftNavButton(back);

var textButtonView = Ti.UI.createView({
	height:'100dp',
	width:'768dp',
	top:'630dp',
});
win.add(textButtonView);

var myData = [];
myData[0] = {
	name : 'Förberedelser',
	left : '30dp',
	url : 'preparations.js'
};

myData[1] = {
	name : 'Vinschema',
	left : '265dp',
	url : 'vinschema.js'
};

myData[2] = {
	name : 'Provning',
	left : '460dp',
	url : 'procedure.js'
};

myData[3] = {
	name : 'Vinerna',
	left : '630dp',
	url : 'description.js'
};


var textButton = [];
var curr = 0;


function addToMyData(myTitle, myLeft, myUrl) {

	textButton[curr] = Ti.UI.createLabel({
		Font : {fontFamily : 'papyrus', fontSize : '30sp'},
		height : '50dp',
		width : '200dp',
		top : 0,
		left : myLeft,
		text : myTitle,
	

	});
	textButtonView.add(textButton[curr]);

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
	addToMyData(myData[curr].name, myData[curr].left, myData[curr].url);

	curr++;
	
	if(curr == 4){
		clearInterval(interval);
	}

}, 300);


var imageView = Ti.UI.createImageView({
	width:'700dp',
	height:'464dp',
	top:'150dp',
	image:'images/gruppbild.jpg'
	
});
win.add(imageView);


var infoLabel=Ti.UI.createLabel({
	width:'680dp',
	height:'80dp',
	top:'40dp',
	font:{fontSize:'14sp', fontFamily:'arial'},
	text:'Att prova vin kan låta som en snobbig och lite komplicerad historia men så behöver det inte alls vara. Vår tanke är att du som glad vinamatör ska kunna hålla i en enkel provning tillsammans med goda vänner. Vid vinprovning gäller det att man öppnar sina sinnen och låter sig guidas av dessa fantastiska hjälpmedel som de flesta av oss är födda med. Det är inte svårare än så. Det finns inget rätt eller fel.',
});
win.add(infoLabel);

