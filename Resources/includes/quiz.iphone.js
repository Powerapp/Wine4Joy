var win = Ti.UI.currentWindow;
	win.backgroundColor='#fff';
		
			win.orientationModes = [
			Ti.UI.PORTRAIT
			];


Ti.include('global.js');
	
var back = Ti.UI.createButton({
    title: "Meny",
    style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});
back.addEventListener("click", function() {
    Ti.UI.currentWindow.close();
});

Ti.UI.currentWindow.setLeftNavButton(back);

var imageView = Ti.UI.createImageView({
	width:'100%',
	height:'100%',
	image:'images/gruppglas_portrait.jpg',
	
});
win.add(imageView);

var infoView = Ti.UI.createView({
	top:'170dp',
	height:'30dp',
	width:'280dp',
	backgroundColor:'#fff7c5',

});
win.add(infoView);

var infoViewLabel=Ti.UI.createLabel({
	textAlign:'center',
	top:'170dp',
	height:'30dp',
	width:'280dp',
	text:'Testa dina egna och dina vänners kunskaper.',
	font:{fontFamily:'arial', fontSize:'11sp'},
});
win.add(infoViewLabel);

var myData = [];
var curr = 0;



function addToData(myQuestion, myAlternative, myAnswer, myDesc) {

	var row = Titanium.UI.createTableViewRow({
		height : '90dp',
		selectedBackgroundImage : '#000',
		svar:myAnswer,
		desc:myDesc

	});
	var question = Titanium.UI.createLabel({
		text : myQuestion,
		color : '#8a1504',
		font : {fontSize : '10sp', fontFamily : 'arial', fontWeight : 'bold'},
		top : 5,
		left : '10dp',
		width:'200dp'
	});
	row.add(question);

	var alternatives = Titanium.UI.createLabel({
		text : myAlternative,
		color : '#000000',
		font : {fontSize : '10sp',fontFamily : 'arial'},
		bottom :'15dp',
		left : '10p',
	});
	row.add(alternatives);

	
	var labelsvar = Ti.UI.createLabel({
		text:myAnswer,
		visible:false
		
	});
	row.add(labelsvar);
	
	var answerView = Titanium.UI.createView({
		width:'50dp',
		height:'20dp',
		right:'10dp',
		top:'10dp',
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
		right:'10dp',
		top:'10dp',
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
	height:'200dp',
	top :'200dp' ,
	width:'280dp',

});


win.add(tableView);


addToData("Vad betyder ordet Champagne?", '', 'öppet landskap', 'Min förklaring');
addToData("Vilket champagnemärke föredrog Winston Churchill?", '1. Tattinger  X. Pol Roger  2. Veuve Clicquot', 'Pol Roger');
addToData("Vad hette benediktinermunken som haft stor betydelse för champagnens utveckling?", '', 'Dom Pierre Pérignon');
addToData("År 2010 bärgades, utanför Ålands kust, ett fartyg med 168 helt oskadda flaskor av märket Veuve Clicquot. Hur gamla tros de vara?", '1. Tidigt 1800-tal  X. Sent 1800-tal  2. Tidigt 1900-tal', 'Början av 1800-talet');
addToData("Betyder sec att vinet är torrt eller sött?", '', 'Torrt');
addToData("Vad kallas processen att samla fällningen som bildats i flaskan och få ner den i flaskhalsen?", '1. Pupitres  X. Degorgering  2. Remuage', 'Remuage');
addToData("Denna yppiga blondin sägs ha badat i Champagne. Vem?", '', 'Marilyn Monroe');
addToData("Bör man rotera ett i glas Champagne cirklar för att doften skall stiga till ytan?", '', 'Nej');
addToData("Hur åstadkommar man roséchampagnens rosa färg?", '', 'Man blandar i rött vin');
addToData("Vad innehåller drinken Stolly Bolly?", '', 'Champagne av märket Bollinger och Stolichnaya vodka');

tableView.data = myData;

if(is_iOS7){
	win.fullscreen = true;
	imageView.add(backBtn);
	backBtn.visible=true;
	backBtn.top = '20dp';

}

