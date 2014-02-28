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
			tableView.left = '400dp';
			tableView.top = '10dp';
			tableView.bottom = '10dp';
			infoView.top='10dp';
			infoView.left='120dp';
			infoView.height='200dp';
			infoView.width='210dp';
			infoViewLabel.top='20dp';
			infoViewLabel.left='130dp';
			infoViewLabel.height='180dp';
			infoViewLabel.width='180dp';
			mailBackground.width='210dp';
			mailBackground.bottom='430dp';
			mailBackground.right='694dp';
			mailText.bottom='440dp';
			mailText.right='690dp';
			envelopeImage.right='710dp';
			envelopeImage.bottom='443dp';
	
	} else {
	
	 		tableView.left = '134dp';
	 		tableView.top = '140dp';
			tableView.bottom = '130dp';
	 		infoView.top='50dp';
			infoView.left='134dp';
			infoView.height='70dp';
			infoView.width='500dp';
			infoViewLabel.top='50dp';
			infoViewLabel.left='144dp';
			infoViewLabel.height='70dp';
			infoViewLabel.width='468dp';
			mailBackground.width='220dp';
			mailBackground.bottom='70dp';
			mailBackground.right='134dp';
			mailText.width='200dp';
			mailText.bottom='80dp';
			mailText.right='110dp';
			envelopeImage.right='140dp';
			envelopeImage.bottom='84dp';
	}
}

Ti.Gesture.addEventListener('orientationchange', function (ev) {
  handleOrientation(ev.orientation);
  
});
	
function mail(){
		var emailDialog = Ti.UI.createEmailDialog();
			emailDialog.subject = "Wine 4 Joy inköpslista";
			emailDialog.toRecipients = [''];
			emailDialog.messageBody = '<b>Vi hoppas listan underlättar dina inköp!</b>';
			emailDialog.html =true;
			emailDialog.setBarColor('#000');
	
	var attachedFile = Ti.Filesystem.getFile('vinlista.pdf');
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
	
	
	
	var back = Ti.UI.createButton({
    title: "Meny",
    style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});
back.addEventListener("click", function() {
    Ti.UI.currentWindow.close();
});

Ti.UI.currentWindow.setLeftNavButton(back);

var infoView = Ti.UI.createView({
	top:'50dp',
	left:'134dp',
	height:'70dp',
	width:'500dp',
	backgroundColor:'#fff7c5',

	
});
win.add(infoView);

var infoViewLabel=Ti.UI.createLabel({
	top:'50dp',
	left:'144dp',
	height:'70dp',
	width:'468dp',
	text:'Vi har försökt att välja viner som finns i Systembolagets ordinarie sortiment i de flesta butiker, men det kan såklart finnas avvikelser. Inom parantesen står anledningen till att vi valt just det vinet.',
	font:{fontFamily:'arial', fontSize:'14sp'},
});
win.add(infoViewLabel);

var myData = [];
var curr = 0;

function addToData(myHeader, mySub, myUrl, myImage, myLabel, myReas, showChild) {

	var row = Titanium.UI.createTableViewRow({
		hasChild : showChild,
		height : '100dp',
		selectedBackgroundImage : '#000',
		url : myUrl,
		mintitle : myHeader,

	});
	var title = Titanium.UI.createLabel({
		text : myHeader,
		color : '#8a1504',
		font : {fontSize : '14sp', fontFamily : 'papyrus', fontWeight : 'bold'},
		top : '15dp',
		left : '90dp'
	});
	row.add(title);

	var sub = Titanium.UI.createLabel({
		text : mySub,
		color : 'black',
		font : {fontSize : '12sp',fontFamily : 'papyrus'},
		top : '40dp',
		left : '90dp',
	});
	row.add(sub);
	
	var sub2 = Titanium.UI.createLabel({
		text : myReas,
		font : {fontSize : '10sp',fontFamily : 'Papyrus'},
		color:'#000',
		bottom : 0,
		left : '90dp',
	});
	row.add(sub2);

	var image = Titanium.UI.createImageView({
		image : myImage,
		left : '0dp',
	});
	row.add(image);

	var label = Titanium.UI.createLabel({
		text : myLabel,
		color : 'black',
		left : '90dp',
		font : {fontSize : '11sp',fontFamily : 'papyrus'},
	});
	row.add(label);

	myData[curr] = row;
	curr++;

};
var tableView = Titanium.UI.createTableView({
	left:'134dp',
	top :'140dp' ,
	bottom : '130dp',
	width:'500dp',


});
win.add(tableView);

tableView.addEventListener('click', function(e) {
	if (e.row.hasChild) {
		var subWin = Ti.UI.createWindow({
			modal : true,
			url : 'systembolaget.js',
			backgroundColor : '#fff',
			title : e.rowData.mintitle,
			minUrl : e.rowData.url,
		});
		subWin.open(subWin);

	}
});

addToData("Asti Martini", 'art.nr. 7706 Pris: 75 kr', 'http://www.systembolaget.se/7706', 'images/asti.jpg', "",'(Sötma: 9, Metod: Charmat, Land: Italiensk Spumante)', true);
addToData('Prosecco la Robínía\nExtra Dry', '\nart.nr. 7486 Pris: 85 kr', 'http://www.systembolaget.se/7486', 'images/prosecco.jpg', "",'(Sötma: 4, Metod: Charmat, Land: Italiensk Prosecco)', true);
addToData('Louis Bouillot\nCrémant de Bourgogne Brut ', '\nart.nr. 7688 Pris: 109 kr', 'http://www.systembolaget.se/7688', 'images/louis.jpg', "",'(Sötma: 1, Metod: Traditionell, Land: Fransk Crémant)', true);
addToData('Chapel Hill\nSparkling Chardonnay', '\nart.nr. 7649 Pris: 65 kr', 'http://www.systembolaget.se/7649', 'images/chapel.jpg', "",'(Sötma: 2, Metod: Kolsyrat, Land: Ungersk Pezsgö)', true);
addToData('Boschendal\nChardonnay Pinot Noir Brut', '\nart.nr. 7889 Pris: 98 kr', 'http://www.systembolaget.se/7889', 'images/boschendal.jpg', "",'(Sötma: 1, Metod: Traditionell, Land: Nya Världen, Sydafrika)', true);
addToData('Bollinger\nSpecial Cuvée Brut', '\nart.nr. 7418 Pris: 395 kr', 'http://www.systembolaget.se/7418', 'images/bollinger.jpg', "",'(Sötma: 1, Metod: Traditionell, Land: Champagne)', true);
addToData("Smakprover", "", "smakprover_iphone.html", "", '','', true);

tableView.data = myData;

var mailBackground = Ti.UI.createView({
	width:'220dp',
	height:'50dp',
	bottom:'70dp',
	right:'134dp',
	backgroundColor:'#000',
	opacity:0.3
	
	
});

win.add(mailBackground);

var mailText = Ti.UI.createLabel({
	width:'200dp',
	height:'30dp',
	bottom:'60dp',
	right:'110dp',
	color:'#fff',
	font:{fontFamily:'Arial', fontSize:'14sp'},
	text:'Maila lista som pdf'
	
	
});
win.add(mailText);

var envelopeImage = Ti.UI.createButton({
		backgroundImage:'images/envelope.png',
		width:'40dp',
		height:'23dp',
		right:'140dp',
		bottom:'64dp'
	});
	envelopeImage.addEventListener('click', function(e){	
		mail();
	
	});
	
	win.add(envelopeImage);
	handleOrientation();



