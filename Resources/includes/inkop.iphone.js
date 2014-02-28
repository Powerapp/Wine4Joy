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
			
			
function mail(){
		var emailDialog = Ti.UI.createEmailDialog();
			emailDialog.subject = "Wine 4 Joy inköpslista";
			emailDialog.toRecipients = [''];
			emailDialog.messageBody = '<b>Vi hoppas listan underlättar dina inköp!</b>';
			emailDialog.html =true;
	
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
	
	
var infoViewLabel=Ti.UI.createLabel({
	top:'50dp',
	height:'80dp',
	left:'10dp',
	right:'10dp',
	text:'Vi har försökt att välja viner som finns i Systembolagets ordinarie sortiment i de flesta butiker, men det kan såklart finnas avvikelser. Inom parantesen står anledningen till att vi valt just det vinet.',
	font:{fontFamily:'arial', fontSize:'11sp'},
});
win.add(infoViewLabel);
	
var myData = [];
var curr = 0;

function addToData(myHeader, mySub, myUrl, myImage, myLabel, myReas, showChild) {

	var row = Titanium.UI.createTableViewRow({
		hasChild : showChild,
		selectedBackgroundImage : '#000',
		url : myUrl,
		mintitle : myHeader,

	});
	
		var title = Titanium.UI.createLabel({
		text : myHeader,
		color : '#8a1504',
		font : {fontSize : '14sp', fontFamily : 'Papyrus', fontWeight : 'bold'},
		top : '15dp',
		left : '90dp'
	});
	row.add(title);

	var sub = Titanium.UI.createLabel({
		text : mySub,
		font : {fontSize : '12sp',fontFamily : 'Papyrus'},
		color:'#000',
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
		height:'120dp',
		width:'80dp',
		left : 0,
	});
	row.add(image);

	var label = Titanium.UI.createLabel({
		text : myLabel,
		color:'#000',
		left : '90dp',
		font : {fontSize : '11sp',fontFamily : 'papyrus'},
	});
	row.add(label);

	myData[curr] = row;
	curr++;

};
var tableView = Titanium.UI.createTableView({
	rowHeight:'100dp',
	left:0,
	right:0,
	top :'120dp' ,

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



var envelopeImage = Ti.UI.createButton({
		backgroundImage:'images/envelope_black.jpg',
		width:'40dp',
		height:'23dp',
		right:'10dp',
		top:'20dp'
	});
	envelopeImage.addEventListener('click', function(e){	
		mail();
	
	});
	
	win.add(envelopeImage);

