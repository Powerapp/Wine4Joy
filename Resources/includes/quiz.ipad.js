var win = Ti.UI.currentWindow;
	win.backgroundColor='#fff';
		
			win.orientationModes = [
			Ti.UI.PORTRAIT,
			Ti.UI.UPSIDE_PORTRAIT,
			Ti.UI.LANDSCAPE_LEFT,
			Ti.UI.LANDSCAPE_RIGHT
			];
	
	function handleOrientation(orientation){
 	if(orientation == 0 || orientation == 5){

	}else if (Ti.Gesture.isLandscape(orientation)) {
			
			tableView.left = '270dp';
			tableView.top = '350dp';
			infoView.top='250dp';
			infoView.left='270dp';
			infoView.height='70dp';
			infoView.width='500dp';
			infoViewLabel.top='260dp';
			infoViewLabel.left='280dp';
			infoViewLabel.height='70dp';
			infoViewLabel.width='468dp';
			
	
	} else {

			tableView.left = '134dp';
	 		tableView.top = '500dp';
			tableView.bottom = '130dp';
	 		infoView.top='400dp';
			infoView.left='134dp';
			infoView.height='70dp';
			infoView.width='500dp';
			infoViewLabel.top='400dp';
			infoViewLabel.left='144dp';
			infoViewLabel.height='70dp';
			infoViewLabel.width='468dp';
			
			
	}
}

Ti.Gesture.addEventListener('orientationchange', function (ev) {
  handleOrientation(ev.orientation);
  
});
	

var back = Ti.UI.createButton({
    title: "Meny",
    style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});
back.addEventListener("click", function() {
    Ti.UI.currentWindow.close();
});

Ti.UI.currentWindow.setLeftNavButton(back);

var imageView = Ti.UI.createImageView({
	width:'768dp',
	height:'1024dp',
	image:'images/gruppglas_portrait.jpg',
	
});
win.add(imageView);

var infoView = Ti.UI.createView({
	top:'400dp',
	left:'134dp',
	height:'70dp',
	width:'500dp',
	backgroundColor:'#fff7c5',
 
	
});
win.add(infoView);

var infoViewLabel=Ti.UI.createLabel({
	textAlign:'center',
	top:'400dp',
	left:'144dp',
	height:'70dp',
	width:'468dp',
	text:'Testa dina egna och dina vänners kunskaper.',
	font:{fontFamily:'arial', fontSize:'14sp'},
});
win.add(infoViewLabel);

var myData = [];
var curr = 0;



function addToData(myQuestion, myAlternative, myAnswer, myDesc) {

	var row = Titanium.UI.createTableViewRow({
		height : '100dp',
		selectedBackgroundImage : '#000',
		svar:myAnswer,
		desc:myDesc

	});
	var question = Titanium.UI.createLabel({
		text : myQuestion,
		color : '#8a1504',
		font : {fontSize : '14sp', fontFamily : 'arial', fontWeight : 'bold'},
		top : '15dp',
		left : '20dp',
		width:'400dp'
	});
	row.add(question);

	var alternatives = Titanium.UI.createLabel({
		text : myAlternative,
		color : '#000000',
		font : {fontSize : '12sp',fontFamily : 'arial'},
		top : '70dp',
		left : '20p',
	});
	row.add(alternatives);

	
	var labelsvar = Ti.UI.createLabel({
		text:myAnswer,
		visible:false,

		
	});
	row.add(labelsvar);
	
	var answerView = Titanium.UI.createView({
		width:'50dp',
		height:'20dp',
		right:'20dp',
		backgroundColor:'#000',
		opacity:0.7
	});
	row.add(answerView);

	
	var label = Titanium.UI.createLabel({
		textAlign:'center',
		text : 'Svar',
		color : '#fff',
		width:'50dp',
		height:'20dp',
		right:'20dp',
		font : {fontSize : '14sp',fontFamily : 'arial'},
	});
	row.add(label);	
	
	
	label.addEventListener('click', function(){
			alert('Rätt svar: '+ myAnswer);
	});
	

	myData[curr] = row;
	curr++;

};
var click=0;

				
var tableView = Titanium.UI.createTableView({
	height:'350dp',
	top :'500dp' ,
	width:'500dp',

});


win.add(tableView);


addToData("Vad betyder ordet Champagne?", '', 'öppet landskap', 'Min förklaring');
addToData("Vilket champagnemärke föredrog Winston Churchill?", '1. Tattinger  X. Pol Roger  2. Veuve Clicquot', 'Pol Roger');
addToData("Vad hette benediktinermunken som haft stor betydelse för champagnens utveckling?", '', 'Dom Pierre Pérignon');
addToData("År 2010 bärgades, utanför Ålands kust, ett fartyg med 168 helt oskadda flaskor av märket Veuve Clicquot. Hur gamla tros de vara?", '1. Början av 1800-talet  X. Slutet av 1800-talet  2. Början av 1900-talet', 'Början av 1800-talet');
addToData("Betyder sec att vinet är torrt eller sött?", '', 'Torrt');
addToData("Vad kallas processen att samla fällningen som bildats i flaskan och få ner den i flaskhalsen?", '1. Pupitres  X. Degorgering  2. Remuage', 'Remuage');
addToData("Denna yppiga blondin sägs ha badat i Champagne. Vem?", '', 'Marilyn Monroe');
addToData("Bör man rotera ett i glas Champagne cirklar för att doften skall stiga till ytan?", '', 'Nej');
addToData("Hur åstadkommar man roséchampagnens rosa färg?", '', 'Man blandar i rött vin');
addToData("Vad innehåller drinken Stolly Bolly?", '', 'Champagne av märket Bollinger och Stolichnaya vodka');

tableView.data = myData;


handleOrientation();
